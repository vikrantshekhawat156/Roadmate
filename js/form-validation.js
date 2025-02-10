$(document).ready(function() {
    // Initialize form validation
    $("#contactForm").validate({
        // Validation rules
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 5
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        // Validation error messages
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            subject: {
                required: "Please enter a subject",
                minlength: "Subject must be at least 5 characters long"
            },
            message: {
                required: "Please enter your message",
                minlength: "Message must be at least 10 characters long"
            }
        },
        // Error element
        errorElement: "div",
        errorClass: "invalid-feedback",
        // Error placement
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        // Highlight function
        highlight: function(element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        // Unhighlight function
        unhighlight: function(element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        // Submit handler
        submitHandler: function(form) {
            // Show success message
            $("#formMessage")
                .html('<div class="alert alert-success">Thank you for your message! We will get back to you soon.</div>')
                .fadeIn();
            
            // Clear the form
            form.reset();
            $(".form-control").removeClass("is-valid");
            
            // Scroll to message
            $('html, body').animate({
                scrollTop: $("#formMessage").offset().top - 100
            }, 500);
            
            return false; // Prevent actual form submission
        }
    });
});
