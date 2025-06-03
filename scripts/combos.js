const comboGrid = document.querySelector(".combo-grid");
const template = document.querySelector(".combo-block").cloneNode(true);

const combos = [
    {
        "name" : "BnB Tracers",
        "actions" : "tGustt"
    },
    {
        "name" : "BnB Short Plink",
        "actions" : "tGuso"
    },
    {
        "name" : "BnB Long Plink",
        "actions" : "tGusto"
    },
    {
        "name" : "BnB Punch",
        "actions" : "tGupt"
    },
    {
        "name" : "Reverse Panther",
        "actions" : "tGutp"
    },
    {
        "name" : "BnB U3H",
        "actions" : "tGuwpp+o"
    },
    {
        "name" : "Weave Combo",
        "actions" : "tGstust"
    },
    {
        "name" : "Panther Combo",
        "actions" : "tGptu"
    },
    {
        "name" : "Fast Panther",
        "actions" : "tGsptu"
    },

    {
        "name" : "One Two",
        "actions" : "tptu"
    },
    {
        "name" : "Overhead One Two",
        "actions" : "totu"
    },
    {
        "name" : "Displace Combo",
        "actions" : "tgptu"
    },
    {
        "name" : "Reverse Yo-Yo",
        "actions" : "tgdotu"
    },
    {
        "name" : "Grip Kick Rip",
        "actions" : "(pp)tgktu"
    },
    {
        "name" : "Fast FFAmestack",
        "actions" : "otG+u"
    },
    {
        "name" : "Master Manipulator?",
        "actions" : "otsptu"
    },
    {
        "name" : "Master Masher",
        "actions" : "otgdstu"
    },
    {
        "name" : "Fantastic Killer",
        "actions" : "otgdstusto"
    },
    {
        "name" : "Saporen FFAmestack",
        "actions" : "to+G+u"
    },

    {
        "name" : "Yo-Yo",
        "actions" : "gdstusto"
    },
    {
        "name" : "Botched Yo-Yo",
        "actions" : "dgstuodtotu"
    },
    {
        "name" : "Agni Kai Yo-Yo",
        "actions" : "(o)gdtutp"
    },
    {
        "name" : "Drop Yo-Yo",
        "actions" : "(o)gtutp"
    },

    {
        "name" : "Driveby",
        "actions" : "ztutGu"
    },
    {
        "name" : "Baldienator",
        "actions" : "tGuot"
    },
    {
        "name" : "Vortex",
        "actions" : "ustdGo"
    }
];

const tech = [
    {
        "name" : "Bread and Butter",
        "actions" : "tGu"
    },
    {
        "name" : "Bunny Hop",
        "actions" : "ztj"
    },
    {
        "name" : "FFAmestack",
        "actions" : "(t)G+u"
    },
    {
        "name" : "Saporen Tech",
        "actions" : "(t)o+G"
    },
    {
        "name" : "Space Jam",
        "actions" : "(t)u+s+G"
    },
    {
        "name" : "Unique 3 Hit",
        "actions" : "wpp+o"
    },
    {
        "name" : "Overhead Preserve",
        "actions" : "(t)s+Go"
    },
    {
        "name" : "FFAme Glide",
        "actions" : "zuj"
    },
    {
        "name" : "Webstep",
        "actions" : "zt"
    },
    {
        "name" : "Mometum Pull",
        "actions" : "ztdusg"
    },
    {
        "name" : "Reverse Trigger / Backflash",
        "actions" : "p+t"
    },
    {
        "name" : "Sly Tech",
        "actions" : "s+uo"
    },
    {
        "name" : "Wall Bounce",
        "actions" : "s"
    },
    {
        "name" : "Collision cancel",
        "actions" : "zo"
    },
    {
        "name" : "LowZlam",
        "actions" : "so"
    },
    {
        "name" : "NStop",
        "actions" : "d+u"
    },
    {
        "name" : "Makatore Pull",
        "actions" : "gdztju"
    },
    {
        "name" : "Double Overhead",
        "actions" : "sdoo"
    },
    {
        "name" : "U Turn",
        "actions" : "s"
    }
];

function populate() {
    let list;
    if (window.location.pathname == "/pages/combos.html") list = combos;
    else if (window.location.pathname == "/pages/tech.html") list = tech;
    else return;

    document.querySelectorAll(".combo-block").forEach(element => {
        element.remove();
    });

    list.forEach(combo => {
        let newBlock = template.cloneNode(true);
        newBlock.querySelector(".combo-name").innerHTML = combo["name"];
        comboGrid.append(newBlock);

        let actionString = "";
        combo["actions"].split("").forEach(action => {
            actionString += KEY_CONDENSED[action];
        });
        newBlock.querySelector(".combo-actions").innerHTML = actionString;

    });
};

populate();
