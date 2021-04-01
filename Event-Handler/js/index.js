function transformUppercase(_val){
 return _val.toUppercase();
}

//event listener
let elnamaPengguna= document.getElementById ("namaPengguna"); // select elemet
elnamaPengguna.addEventListener("keyup",function(){
elnamaPengguna.value= transformUppercase(elnamaPengguna.value)
});