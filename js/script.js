// Enable Bootstrap validation
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('#contactForm');


    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});


