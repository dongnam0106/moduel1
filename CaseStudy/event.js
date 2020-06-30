function getLocal() {
    localStorage.Number = document.getElementById("StudyNumber").value;
    localStorage.Name = document.getElementById("StudyName").value;
    localStorage.Password = '**********';
    localStorage.Email = document.getElementById("StudyEmail").value;
    localStorage.Nation = document.getElementsByClassName("nation").value;

    let radios = document.getElementsByName("gender");
    for (let i = 0; i <radios.length; i++){
        if (radios[i].checked){
            localStorage.Gender = radios[i].value;
        }
    }

    let select = document.getElementById("nationality");
        for (let i = 0; i< select.length; i++){
            if (select[i].selected){
                localStorage.Nation = select[i].value;
            }
        }

    let color = document.getElementById("colorType");

    localStorage.Date = document.getElementById("birthday").value;
    console.log(document.getElementById("birthday").value);

    for (let i = 0; i< select.length; i++){
        // if (color[i].selected){
        //     localStorage.Color = color[i].value;
        //     console.log(color[i]);
        // }
    }
}
localStorage.getItem('Number');
localStorage.getItem('Name');
localStorage.getItem('Password');
localStorage.getItem('Email');
localStorage.getItem('Gender');
localStorage.getItem('Nation');
localStorage.getItem('Color');
localStorage.getItem('Date');

let mess = '<img src="imgs/check.png"/>';

function NumberInput() {
    let number = document.getElementById("StudyNumber").value;
    let numCheck = document.getElementById("numCheck");

    let numRe = /[A-Z]{4}[0-9]{6}/;

    if (numRe.test(number)) {
        document.getElementById("numCheck").innerHTML = mess;
    } else {
        document.getElementById("numCheck").innerHTML = "Vui lòng nhập 4 chữ in hoa và 6 số!";
    }

}

function PasswordInput() {
    let password = document.getElementById("StudyPass").value;
    let passCheck = document.getElementById("passCheck");

    let passRe = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}/;

    if (passRe.test(password)){
        document.getElementById("passCheck").innerHTML = mess;
    } else {
        document.getElementById("passCheck").innerHTML = "Vui lòng nhập mật khẩu gồm 8 ký tự trở lên bao gồm chữ in hoa và số!"
    }

}