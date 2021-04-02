function transformUppercase(_val){
 return _val.toUppercase();
}

//event listener

var elnamaPengguna= document.getElementById ("namaPengguna"); // select elemet
elnamaPengguna.addEventListener("keyup",function(){
elnamaPengguna.value= transformUppercase(elnamaPengguna.value);
});

function checkPassword(){
    let elkataLaluan = document.getElemetById ("kataLaluan");
    let password_val = elkataLalauan.value;
    if (password_val.length>5){
        alert("password check...ok !");
        else {
            alert ("password too short");
        }
    }
}

let elkataLaluan = document.getElementById("kataLaluan");
elkataLalauan.onblur = checkPassword; 