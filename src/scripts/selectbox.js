'use strict'

const active = 'is-active'

const select = {
    elem: document.body.querySelectorAll(".selectbox"),
    active: function(e) {
        e.target.closest(".selectbox").classList.toggle(active)
    }
}

// load
// window.addEventListener("DOMContentLoaded",() => {
//     select.init
// })

// event
select.elem.forEach(e => {
    e.addEventListener(
        'click', select.active
    )
})