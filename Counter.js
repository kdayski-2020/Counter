window.addEventListener('DOMContentLoaded', function () {
    // Counter

    let persons = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        base = document.querySelector('#select'),
        sum = document.querySelector('#total'),
        mod = base.children[0].value;
    
    persons.value = null;
    days.value = null;
    sum.textContent = 0;

    persons.addEventListener('input', function() {
        if (days.value != null) {
            sum.textContent = persons.value*days.value*4000*mod;
        } else {
            sum.textContent = 0;
        }
    });

    days.addEventListener('input', function() {
        if (persons.value != null) {
            sum.textContent = persons.value*days.value*4000*mod;
        } else {
            sum.textContent = 0;
        }
    });

    base.addEventListener('change', function() {
        mod = base.children[this.selectedIndex].value;
        sum.textContent = persons.value*days.value*4000*mod;
    });
});