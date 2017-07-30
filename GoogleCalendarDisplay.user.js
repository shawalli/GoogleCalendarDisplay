// ==UserScript==
// @name         Google Calendar Display
// @namespace    http://github.com/shawalli
// @version      0.1
// @description  Clean up parts of calendar page for static viewing on public monitor
// @author       Shawn Wallis
// @match        https://calendar.google.com/calendar/render*
// @grant        none
// ==/UserScript==

// WARNING
// This script may or may not work on Google Calendar, depending on what point in time
// (and therefore, what version of the calendar) you are viewing. I make no promises
// of useability, and you have been warned.

function setScroll() {
    // start scroll at around 5am
    document.getElementById("scrolltimedeventswk").scrollTop = 200;
    document.getElementById("scrolltimedeventswk").style.height = window.innerHeight - 75 + "px";
}

function removeCruft() {
    // google search bar
    document.getElementById("onegoogbar").outerHTML = '';
    // calendar nav top bar
    document.getElementById("vr-nav").outerHTML = '';
    
    // Since we still want the view of the whole month, leave it there and
    // specifically trim out everything else.
    
    // event "Create" button
    document.getElementById("createEventButtonContainer").outerHTML = '';
    // my cals header
    document.getElementById("clst_my").outerHTML = '';
    // my cals list
    document.getElementById("lhscalinner_my").outerHTML = '';
    // fav cals header
    document.getElementById("clst_fav").outerHTML = '';
    // fav cals list
    document.getElementById("lhscalinner_fav").outerHTML = '';
    // google legalese
    document.getElementById("navfooter").outerHTML = '';
}

function autoReload() {
    var timeout = 60;
    setTimeout(function(){ location.reload(); }, timeout*1000);
}

(function() {
    setScroll();
    removeCruft();
    autoReload();
})();
