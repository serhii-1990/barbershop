var headerNavToggle = document.querySelector('.navigation__toggle');
var headerNavConditions = {
    opened: 'navigation_opened',
    closed: 'navigation_closed'
};
var headerNav = document.querySelector('.main-header .navigation');

headerNav.classList.remove('navigation_nojs');

window.onload = function() {
    // mobile menu toggle 
    function togglingNavMenu(target, conditions) {

        if (target.classList.contains(conditions.opened)) {
            target.classList.replace(conditions.opened, conditions.closed);
        } else {
            target.classList.replace(conditions.closed, conditions.opened);
        }
    }

    headerNavToggle.onclick = function() {
        togglingNavMenu(headerNav, headerNavConditions);
    }
}