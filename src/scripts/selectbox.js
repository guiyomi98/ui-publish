'use strict'

const active = 'is-active'

const selectbox = {
    component: document.body.querySelectorAll(".selectbox"),
    active: e => {
        // console.log('click')
        let elem = e.target.closest(".selectbox")

        for(var i = 0; i < elem.classList.length; ++i){
            if (elem.classList[i] == active) {
                // elem.classList.remove(active)
            } else {
                elem.classList.add(active)
            }
        }
    }
}


// event
selectbox.component.forEach(e => {
    e.querySelector('.selectbox__btn').addEventListener(
        'click', selectbox.active
    )
})