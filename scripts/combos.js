const comboGrid = document.querySelector(".combo-grid");
const template = document.querySelector(".combo-block").cloneNode(true);
const infoPanel = document.querySelector(".info-panel");

function populate() {
    document.querySelectorAll(".combo-block").forEach(element => {
        element.remove();
    });

    for(let i = 0; i < combos.length; i++) {
        let newBlock = template.cloneNode(true);
        newBlock.querySelector(".combo-name").innerHTML = combos[i]["name"];
        newBlock.setAttribute("data-index", i)

        newBlock.querySelector("img").setAttribute("src", "../images/backgrounds/" + combos[i]["name"].split(" /")[0] + ".png");
        comboGrid.append(newBlock);

        let actionString = "";
        combos[i]["actions"].split("").forEach(action => {
            actionString += KEY_CONDENSED[action];
        });
        newBlock.querySelector(".combo-actions").innerHTML = actionString;
    }

    updateInfoPanel();
};

let currentCombo = null;

function updateInfoPanel() {
    if (currentCombo == null) return;

    infoPanel.querySelector("iframe").setAttribute("src", "https://youtube.com/embed/" + combos[currentCombo.dataset.index]["url"]);
    infoPanel.querySelector(".info-name").innerHTML = combos[currentCombo.dataset.index]["name"];
    infoPanel.querySelector(".info-damage").innerHTML = "<b>Damage: </b>" + combos[currentCombo.dataset.index]["damage"];
    infoPanel.querySelector(".info-time").innerHTML = "<b>Time: </b>" + combos[currentCombo.dataset.index]["time"];
    infoPanel.querySelector(".info-difficulty").innerHTML = "<b>Difficulty: </b>" + combos[currentCombo.dataset.index]["difficulty"] + "/5";
    infoPanel.querySelector(".info-usefulness").innerHTML = "<b>Usefulness: </b>" + combos[currentCombo.dataset.index]["usefulness"] + "/5";
    infoPanel.querySelector(".info-description").innerHTML = combos[currentCombo.dataset.index]["description"];
    
    let parseString = combos[currentCombo.dataset.index]["actions"];
    let computeString = "";
    
    if (PREF_FULL == "icegawd") {
        parseString = parseString.replaceAll("st", "x");
        parseString = parseString.replaceAll("sp", "hp");
        parseString = parseString.replaceAll("sk", "hk");
        parseString = parseString.replaceAll("so", "ho");
    }
    
    while (parseString.length > 0) {

        if (["icons", "letters", "kbm", "xbox", "ps"].includes(PREF_FULL)) {
            computeString += KEY_FULL[parseString[0]];
        }

        else {
            if (parseString[0] == "+") computeString += " ";
            computeString += KEY_FULL[parseString[0]];
            if (parseString.length > 1 && !(["(", "+", ")"].includes(parseString[0])) && !([")", "+"].includes(parseString[1]))) computeString += (" > ");
            if (["+", ")"].includes(parseString[0])) computeString += " ";
        }

        parseString = parseString.substring(1);
    }

    computeString += '<img src="../images/icon-punch.png" style="opacity:0">'
    infoPanel.querySelector(".info-actions").innerHTML = computeString;
}


function expandInfo() {
    if (infoPanel.dataset.active == "false") {
        if (currentCombo == null) return;
        updateInfoPanel();
        let yBefore = currentCombo.getBoundingClientRect().top;
        placeInfo();
        infoPanel.setAttribute("data-active", "true");
        scrollBy(0, currentCombo.getBoundingClientRect().top- yBefore);
    }

    else {
        let rowGap = window.getComputedStyle(infoPanel).margin;
        rowGap = Number(rowGap.substring(0, rowGap.length - 2)) * 2;

        if (infoPanel.getBoundingClientRect().bottom + rowGap > window.innerHeight) {
            scrollBy({
                top:  infoPanel.getBoundingClientRect().bottom + rowGap - window.innerHeight,
                left: 0,
                behavior: "smooth"
            });
        }
    }
}

function changeInfo(combo) {
    combo.setAttribute("data-active", "true");
    if (currentCombo != null) currentCombo.setAttribute("data-active", "false");

    if (currentCombo == combo) currentCombo = null; 
    else currentCombo = combo;

    if (infoPanel.dataset.active == "false") expandInfo();
    else infoPanel.setAttribute("data-active", "false");
}

function placeInfo() {
    if (currentCombo == null) return;

    let numCols = window.getComputedStyle(comboGrid).gridTemplateColumns.split(" ").length;

    for (i = 0; i < comboGrid.childElementCount; i++) {
        if (comboGrid.children[i] == currentCombo) {
            infoPanel.style.setProperty("grid-row", String(2 + Math.floor((i - 1) / numCols)));
        }
    }
}

infoPanel.addEventListener("transitionend", expandInfo);

window.addEventListener("resize", placeInfo);

populate();
