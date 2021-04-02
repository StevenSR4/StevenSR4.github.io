function transformUppercase(_val){
 return _val.toUpperCase();
}

//event listener

let elNamaPengguna= document.getElementById ("namaPengguna"); // select elemet
elNamaPengguna.addEventListener("keyup",function(){
elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});

function checkPassword(){
    let elKataLaluan = document.getElemetById ("kataLaluan");
    let password_val = elKataLaluan.value;
    if (password_val.length> 5){
        alert("password check...ok !");
    } else {
            alert ("password too short");
        }
    
}

let elKataLaluan = document.getElementById("kataLaluan");
elKataLaluan.onblur = checkPassword; 