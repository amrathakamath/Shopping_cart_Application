document.addEventListener("DOMContentLoaded", function() {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');

    incrementButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = button.parentElement.querySelector('input');
            let value = parseInt(input.value);
            value++;
            input.value = value;
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = button.parentElement.querySelector('input');
            let value = parseInt(input.value);
            if (value > 1) {
                value--;
                input.value = value;
            }
        });
    });
});
