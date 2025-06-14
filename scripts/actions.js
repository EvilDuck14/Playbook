const actionBlocks = document.querySelectorAll(".action-block");

const customPanel = document.querySelector(".custom-panel");
const customInput = document.querySelector(".custom-input")
const kbmPanel = document.querySelector(".kbm-panel");
const xboxPanel = document.querySelector(".xbox-panel");
const psPanel = document.querySelector(".ps-panel");
let currentPanel = null;

let currentKey = "";

function populate() {
    actionBlocks.forEach(actionBlock => {
        let fullNotationField = actionBlock.querySelector(".notation-full");
        let conensedNotationField = actionBlock.querySelector(".notation-condensed");
        fullNotationField.innerHTML = KEY_FULL[actionBlock.dataset.key];
        conensedNotationField.innerHTML = KEY_CONDENSED[actionBlock.dataset.key];

        fullNotationField.style.cursor = ["custom", "kbm", "xbox", "ps"].includes(PREF_FULL) ? "pointer" : "default";
        conensedNotationField.style.cursor = ["custom", "kbm", "xbox", "ps"].includes(PREF_CONDENSED) ? "pointer" : "default";
    });
}

function closePanel() {
    if (currentPanel == null) return;
    currentPanel.style.display = "none";
    currentPanel = null;
}

function editNotation(length, key) {
    let actionSet = length == "full" ? PREF_FULL : PREF_CONDENSED;
    currentKey = key;

    if (actionSet == "custom") {
        currentPanel = customPanel;
        customInput.setAttribute("placeholder", FULL_NAMES[currentKey])
        customInput.value = "";
    }

    if (actionSet == "kbm") currentPanel = kbmPanel;
    if (actionSet == "xbox") currentPanel = xboxPanel;
    if (actionSet == "ps") currentPanel = psPanel;

    if (["kbm", "xbox", "ps"].includes(actionSet)) {
        currentPanel.querySelectorAll("img").forEach(img => {
            if ((length == "full" ? KEY_FULL : KEY_CONDENSED)[currentKey].indexOf(img.src.substring(img.src.indexOf("images/"))) != -1) {
                img.style.boxShadow = "0px 0px min(2svw, 2svh) 0px rgba(255, 255, 200, 0.3)";
                img.style.backgroundColor = "rgba(255, 255, 200, 0.12)";
            }
            else {
                img.style.boxShadow = "0px 0px 0px 0px transparent";
                img.style.backgroundColor = "transparent";
            }
        });
    }


    if (currentPanel != null) currentPanel.style.display = "flex";

    populate();
}

function confirmNotation(button) {
    if (currentPanel == customPanel);
    if (currentPanel == kbmPanel) document.cookie = 'KBM_' + currentKey + '=<img src="../' + button.src.substring(button.src.indexOf("images")) + '">; path=/; expires=' + expireDate;
    if (currentPanel == xboxPanel) document.cookie = 'XBOX_' + currentKey + '=<img src="../' + button.src.substring(button.src.indexOf("images")) + '">; path=/; expires=' + expireDate;
    if (currentPanel == psPanel) document.cookie = 'PS_' + currentKey + '=<img src="../' + button.src.substring(button.src.indexOf("images")) + '">; path=/; expires=' + expireDate;
    readCookies();
    populate();
    closePanel();
}

function confirmCustom() {
    if (customInput.value != "") document.cookie = "CUSTOM_" + currentKey + "=" + customInput.value + "; path=/; expires=" + expireDate;
    readCookies();
    populate();
    closePanel();
}

function customKeyDown(event) {
    if (event.key == "Enter") confirmCustom();
}

document.addEventListener("mouseup", (e) => {
    if (currentPanel == null) return;
    if (!currentPanel.contains(e.target)) closePanel();
});

populate();