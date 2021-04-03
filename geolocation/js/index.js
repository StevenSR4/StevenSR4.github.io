let elLocate= document.getElementById("btnLocate");
elLocate.addEventListener("click",function(){
    if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position){
 let elLat = document.getElementById("lat");
 let elLong = document.getElementById("long");

 elLat.innerHTML = "Latitide" + position.coords.latitude;
 elLong.innerHTML= "longitude" + position.coords.longitude;
});
    } else {
        alert("Geoloacation is not supported by this browser ! ")
    }
}); 