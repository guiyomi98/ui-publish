'use strict'

const DOM = document.body
const active = 'is-active'

const input = {
    elem: DOM.querySelectorAll(".inputbox"),
    init: function() {
        let self = this.elem
        if(self.length > 0) {
            self.forEach(e => {
            })
        } else {
            return false
        }
    },
    active: e => {
        // console.dir(e.target.classList)
        for(var i = 0; i < e.target.classList.length; ++i){
            if (e.target.classList[i] == active) {
                e.target.classList.remove(active)
            }else {
                e.target.classList.add(active)
            }
        }
    }
}


window.addEventListener("DOMContentLoaded",() => {
    input.init()
})

input.elem.forEach(e => {
    e.querySelector('input').addEventListener(
        'click', input.active
    )
})