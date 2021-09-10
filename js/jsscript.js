// Tooltip

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

// Radio Button Product
$(document).ready(function(){
    $('.radioBtn').click(function(){

        let target = $(this).data('target-id');
        $('.my-div').hide();
        $('.my-div[data-target="'+target+'"]').show();
    });
});

// Form Validation

let email = document.getElementById("email");
let pass = document.getElementById("pwd");
let error = document.getElementById("error");


function validateForm() {
    if (email.value === "" && pass.value === "") {
        error.innerHTML = "Email and Password is empty!";
       return false;
    } 
    if (email.value === "") {
        error.innerHTML = "Email is empty!";
       return false;
    } 
    if (pass.value === "") {
        error.innerHTML = "Password is empty!";
       return false;
    } 
    if (pass.value.length <= 8) {
        error.innerHTML = "Password must longer than 8 characters!";
       return false;
    }
    if (pass.value.length >= 15) {
        error.innerHTML = "Password must be less than 15 characters!";
       return false;
    }  
  
}

