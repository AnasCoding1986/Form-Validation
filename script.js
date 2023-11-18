

function validate() {
    let nameInput = document.getElementById('name').value;
    let passInput = document.getElementById('password').value;

    let nameErr = document.getElementById('nerr');
    let passErr = document.getElementById('perr');

    let flag;

    if (nameInput == '') {
        nameErr.innerHTML = 'Please Enter Your Name';
        flag = 0;        
    }else if (nameInput.length < 3){
        nameErr.innerHTML = 'Minimum Four Character';
        flag = 0;
    }else{
        nameErr.innerHTML = '';
        flag = 1;
    }
    
    
    if (passInput == ''){
        passErr.innerHTML = 'Please Enter Your Password';
        flag = 0;
    }else if (passInput.length < 3){
        passErr.innerHTML = 'Minimum Four Character';
        flag = 0;
    }else{
        passErr.innerHTML = '';
        flag = 1;
    }

    if (flag == 1) {
        return true;
    } else if (flag == 0) {
        return false;
    }
}