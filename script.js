document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const inputs = form.querySelectorAll('input');
            let valid = true;
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    valid = false;
                }
            });
            if (!valid) {
                alert('All fields are required!');
                event.preventDefault();
            }
        });
    }

    // Additional JavaScript for dynamic content loading
});
