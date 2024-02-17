 
    var u_name = document.forms['register']['name'];
    var email = document.forms['register']['email'];
    var pass = document.forms['register']['pass'];
    var cfpass = document.forms['register']['cfpass'];
    var btn_login = document.forms['register']['btn_login'];
    var span = document.querySelectorAll('span');
    var form = document.querySelector('form');

    form.addEventListener('submit',function(event){

        if(u_name.value != '' && email.value != '' && pass.value != '' && cfpass.value != ''){
            alert("Great Job!👍");
        }
        else{
            u_name.classList.add('is-invalid');
            span[0].innerHTML = "Please filde the form </br>";
            
            email.classList.add('is-invalid');
            span[2].innerHTML = "Please filde the form </br>";

            pass.classList.add('is-invalid');
            span[4].innerHTML = "Please filde the form </br>";

            cfpass.classList.add('is-invalid');
            span[6].innerHTML = "Please filde the form </br>";

            event.preventDefault();
        }
    });
    u_name.addEventListener('keyup',function(){
        var u_name_length = /^[A-Za-z]+$/; 
        if(u_name.value.match(u_name_length)){
            u_name.classList.remove('is-invalid');
            span[0].classList.add('d-none');
        }
        else{
            u_name.classList.add('is-invalid');
            // span[0].classList.add('d-none');
            span[1].classList.remove('d-none');
            span[1].innerHTML = "Username is invalid </br>";
        }
    });
    email.addEventListener('keyup',function(){
        var email_length = /^[A-Za-z0-9]+\@[^\s]+\.[^\s]+$/;
        if(email.value.match(email_length)){
            email.classList.remove('is-invalid');
            span[2].classList.add('d-none');
            // span[3].classList.add('d-none');
        }
        else{
            email.classList.add('is-invalid');
            span[2].classList.remove('d-none');
            span[2].innerHTML = "Email is invalid </br>";
        }
    });

    pass.addEventListener('keyup',function(){
        var pass_length = /^[A-Za-z0-9]+$/;
        if(pass.value.length >= 8){
            if(pass.value.match(pass_length)){
                pass.classList.remove('is-invalid');
                span[4].classList.add('d-none');
                span[5].classList.add('d-none');
            }
            else{
                pass.classList.add('is-invalid');
                span[4].classList.remove('d-none');
                span[5].classList.remove('d-none');         
            }
        }
        else{
            pass.classList.add('is-invalid');
            span[4].classList.remove('d-none');
            span[4].innerHTML = "Password must be 8 characters </br>";
        }
    });
