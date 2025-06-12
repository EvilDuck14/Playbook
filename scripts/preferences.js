const expireDate = new Date();
expireDate.setTime(expireDate.getTime() + (365*24*60*60*1000)); // Cookies expire in 1 year

const settingsButton = document.querySelector(".settings-button");
const settingsPanel = document.querySelector(".settings-panel");

let PREF_CONDENSED = "icons";
let PREF_FULL = "short";

let KEY_CONDENSED = {
    "+" : "+",
    "(" : "(",
    ")" : ")"
};

let KEY_FULL = {
    "+" : "+",
    "(" : "(",
    ")" : ")"
};

let FULL_NAMES = {
    "p" : "punch",
    "k" : "kick",
    "o" : "overhead slam",
    "u" : "uppercut",
    "t" : "tracer",
    "s" : "web swing",
    "z" : "web zip",
    "w" : "web whiff",
    "g" : "get over here",
    "G" : "get over here targetting",
    "j" : "jump",
    "d" : "double jump"
};

let SHORT_NAMES = {
    "p" : "punch",
    "k" : "kick",
    "o" : "overhead",
    "u" : "upper",
    "t" : "tracer",
    "s" : "swing",
    "z" : "zip",
    "w" : "whiff",
    "g" : "goh",
    "G" : "goht",
    "j" : "jump",
    "d" : "dj"
};

let LETTER_NAMES = {
    "p" : "p",
    "k" : "k",
    "o" : "o",
    "u" : "u",
    "t" : "t",
    "s" : "s",
    "z" : "z",
    "w" : "w",
    "g" : "g",
    "G" : "G",
    "j" : "j",
    "d" : "d"
};

let ICONS = {
    "p" : '<img src="../images/icon-punch.png">',
    "k" : '<img src="../images/icon-kick.png">',
    "o" : '<img src="../images/icon-overhead.png">',
    "u" : '<img src="../images/icon-uppercut.png">',
    "t" : '<img src="../images/icon-tracer.png">',
    "s" : '<img src="../images/icon-swing.png">',
    "z" : '<img src="../images/icon-zip.png">',
    "w" : '<img src="../images/icon-whiff.png">',
    "g" : '<img src="../images/icon-goh.png">',
    "G" : '<img src="../images/icon-goht.png">',
    "j" : '<img src="../images/icon-jump.png">',
    "d" : '<img src="../images/icon-dj.png">'
};

let ICEGAWD_NAMES = {
    "(" : "(R.",
    "p" : "M",
    "k" : "M.c",
    "o" : "Over",
    "u" : "Upper",
    "t" : "T",
    "s" : "S",
    "z" : "S.L",
    "w" : "SW",
    "g" : "Goh",
    "G" : "Goh.T",
    "j" : "J",
    "d" : "d.J",
    "x" : "SxT",
    "h" : "S.H"
}

let CUSTOM_NAMES = {};
let KBM_BINDS = {};
let XBOX_BINDS = {};
let PS_BINDS = {};


function setCookies() {
    document.cookie = "PREF_CONDENSED=kbm; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "PREF_FULL=short; path=/; SameSite=None; Secure; expires=" + expireDate;

    document.cookie = "CUSTOM_p=punch; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_k=kick; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_o=overhead; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_u=upper; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_t=tracer; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_s=swing; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_z=zip; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_w=whiff; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_g=goh; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_G=goht; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_j=jump; path=/; SameSite=None; Secure; expires=" + expireDate;
    document.cookie = "CUSTOM_d=dj; path=/; SameSite=None; Secure; expires=" + expireDate;

    document.cookie = 'XBOX_p=<img src="../images/xbox-rt.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_k=<img src="../images/xbox-rt.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_o=<img src="../images/xbox-rt.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_u=<img src="../images/xbox-x.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_t=<img src="../images/xbox-lt.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_s=<img src="../images/xbox-lb.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_z=<img src="../images/xbox-lb.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_w=<img src="../images/xbox-lb.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_g=<img src="../images/xbox-rb.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_G=<img src="../images/xbox-rb.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_j=<img src="../images/xbox-a.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'XBOX_d=<img src="../images/xbox-a.png">; path=/; SameSite=None; Secure; expires=' + expireDate;

    document.cookie = 'PS_p=<img src="../images/ps-r2.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_k=<img src="../images/ps-r2.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_o=<img src="../images/ps-r2.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_u=<img src="../images/ps-square.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_t=<img src="../images/ps-l2.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_s=<img src="../images/ps-l1.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_z=<img src="../images/ps-l1.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_w=<img src="../images/ps-l1.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_g=<img src="../images/ps-r1.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_G=<img src="../images/ps-r1.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_j=<img src="../images/ps-cross.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'PS_d=<img src="../images/ps-cross.png">; path=/; SameSite=None; Secure; expires=' + expireDate;

    document.cookie = 'KBM_p=<img src="../images/kbm/mouse_left_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_k=<img src="../images/kbm/mouse_left_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_o=<img src="../images/kbm/mouse_left_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_u=<img src="../images/kbm/keyboard_f_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_t=<img src="../images/kbm/mouse_right_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_s=<img src="../images/kbm/keyboard_shift_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_z=<img src="../images/kbm/keyboard_shift_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_w=<img src="../images/kbm/keyboard_shift_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_g=<img src="../images/kbm/keyboard_e_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_G=<img src="../images/kbm/keyboard_e_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_j=<img src="../images/kbm/keyboard_space_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
    document.cookie = 'KBM_d=<img src="../images/kbm/keyboard_space_outline.png">; path=/; SameSite=None; Secure; expires=' + expireDate;
}

function readCookies() {
    if (decodeURIComponent(document.cookie) == "") setCookies();

    decodeURIComponent(document.cookie).split("; ").forEach(element => {
        if (element.indexOf("PREF_CONDENSED") == 0) PREF_CONDENSED = element.substring(element.indexOf("=") + 1);
        if (element.indexOf("PREF_FULL") == 0) PREF_FULL = element.substring(element.indexOf("=") + 1);

        if (element.indexOf("CUSTOM") == 0) CUSTOM_NAMES[element[element.indexOf("_") + 1]] = element.substring(element.indexOf("=") + 1);
        if (element.indexOf("KBM") == 0) KBM_BINDS[element[element.indexOf("_") + 1]] = element.substring(element.indexOf("=") + 1);
        if (element.indexOf("XBOX") == 0) XBOX_BINDS[element[element.indexOf("_") + 1]] = element.substring(element.indexOf("=") + 1);
        if (element.indexOf("PS") == 0) PS_BINDS[element[element.indexOf("_") + 1]] = element.substring(element.indexOf("=") + 1);
    });

    if (PREF_CONDENSED == "icons") KEY_CONDENSED = Object.assign({}, KEY_CONDENSED, ICONS);
    if (PREF_CONDENSED == "letters") KEY_CONDENSED = Object.assign({}, KEY_CONDENSED, LETTER_NAMES);
    if (PREF_CONDENSED == "kbm") KEY_CONDENSED = Object.assign({}, KEY_CONDENSED, KBM_BINDS);
    if (PREF_CONDENSED == "xbox") KEY_CONDENSED = Object.assign({}, KEY_CONDENSED, XBOX_BINDS);
    if (PREF_CONDENSED == "ps") KEY_CONDENSED = Object.assign({}, KEY_CONDENSED, PS_BINDS);

    if (PREF_FULL == "full") KEY_FULL = Object.assign({}, KEY_FULL, FULL_NAMES);
    if (PREF_FULL == "short") KEY_FULL = Object.assign({}, KEY_FULL, SHORT_NAMES);
    if (PREF_FULL == "icegawd") KEY_FULL = Object.assign({}, KEY_FULL, ICEGAWD_NAMES);
    if (PREF_FULL == "custom") KEY_FULL = Object.assign({}, KEY_FULL, CUSTOM_NAMES);
    if (PREF_FULL == "icons") KEY_FULL = Object.assign({}, KEY_FULL, ICONS);
    if (PREF_FULL == "letters") KEY_FULL = Object.assign({}, KEY_FULL, LETTER_NAMES);
    if (PREF_FULL == "kbm") KEY_FULL = Object.assign({}, KEY_FULL, KBM_BINDS);
    if (PREF_FULL == "xbox") KEY_FULL = Object.assign({}, KEY_FULL, XBOX_BINDS);
    if (PREF_FULL == "ps") KEY_FULL = Object.assign({}, KEY_FULL, PS_BINDS);

    document.querySelector("input[name=condensed][data-notation="+PREF_CONDENSED+"]").checked = true;
    document.querySelector("input[name=expanded][data-notation="+PREF_FULL+"]").checked = true;
}

function deleteAllCookies() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    });
}

settingsButton.addEventListener("click", (e) => {
    if(settingsButton.dataset.active == "true") {
        settingsButton.setAttribute("data-active", "false");
        settingsPanel.style.display = "none";
        return;
    }

    settingsButton.setAttribute("data-active", "true");
    settingsPanel.style.display = "flex";
});

document.addEventListener("mouseup", (e) => {
    if (!settingsPanel.contains(e.target) && !settingsButton.contains(e.target)) {
        settingsButton.setAttribute("data-active", "false");
        settingsPanel.style.display = "none";
    }
});

function notationSelect(obj) {
    if (obj.name == "condensed") {
        PREF_CONDENSED = obj.dataset.notation;
        document.cookie = "PREF_CONDENSED=" + obj.dataset.notation + "; path=/; SameSite=None; Secure; expires=" + expireDate;
    }

    else if (obj.name == "expanded") {
        PREF_FULL = obj.dataset.notation;
        document.cookie = "PREF_FULL=" + obj.dataset.notation + "; path=/; SameSite=None; Secure; expires=" + expireDate;
    }

    readCookies();
    if (window.location.pathname.indexOf("index.html") == -1) populate();
}

readCookies();