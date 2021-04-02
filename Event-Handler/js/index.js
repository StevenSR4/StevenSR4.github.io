function transformUppercase(_val){
 return _val.toUppercase();
}

//event listener

let elNamaPengguna= document.getElementById ("namaPengguna"); // select elemet
elNamaPengguna.addEventListener("keyup",function(){
elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});

function checkPassword(){
    let elkataLaluan = document.getElemetById ("kataLaluan");
    let password_val = elkataLaluan.value;
    if (password_val.length> 5){
        alert("password check...ok !");
        else {
            alert ("password too short");
        }
    }
}

let elkataLaluan = document.getElementById("kataLaluan");
elkataLaluan.onblur = checkPassword; 