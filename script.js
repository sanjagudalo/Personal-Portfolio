// Toggle sidebar functionality
const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav__toggle');
const navClose = document.getElementById('nav__close');



if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar');

        // closing navigation when the link is clicked 

        const navLink = document.querySelectorAll('.nav__link').forEach(item => item.addEventListener('click', () => {
            navMenu.remove('show-sidebar')
        }))


    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    })
}




// Form input animation 

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus")

}

function blur() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blur);
})


// Clearing the form with reset button

let resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
    inputs.forEach(input => input.value = '')
});
