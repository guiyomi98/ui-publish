'use strict'

// event
document.body.querySelectorAll(".btnThema").forEach(e => {
    e.addEventListener(
        'click', function(e) {
            e.target.closest('body').classList.toggle('is-dark')
        }
    )
})