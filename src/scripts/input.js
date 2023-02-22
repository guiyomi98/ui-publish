const active = 'is-active'

const input = {
    elem: document.body.querySelectorAll(".inputbox"),
    init: function() {
        let self = this.elem
        // let access = (self.length > 0) ? self.forEach(e => {console.log(`페이지에 inputbox가 ${self.length}개 있습니다`)}) : console.log(`페이지에 inputbox가 없습니다`)
        let access = (self.length > 0) ? self.forEach(e => {
            
        }) : false
    },
    active: function(e) {
        const [item] = e.target.classList
        console.dir([item])

        if (item === active) {
            e.target.classList.remove(active)
        }else {
            e.target.classList.add(active)
        }
    }
}


window.addEventListener("DOMContentLoaded",() => {
    input.init()
})

input.elem.forEach(e => {
    e.addEventListener(
        'click', input.active
    )
})