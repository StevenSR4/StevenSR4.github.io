let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.nodeValue;

    letuserEmail= document.getElementById("userEmail");
    let userEmail = userEmail.value;


    let userPaxVal=document.getElementById ("userPax").value;
    let userRemarksVal = document.getElementById("userremarks").value;

    BookNow (userNameVal, userEmailVal, userPaxVal,userRemarksVal);

});

function BookNow (userName, userEmail, userPax,userRemarks){
    //alert(userName);

    let url = 'https://api.sheety.co/9192796fbfeb32fc266d9e164e704c37/tableapp/bookingItem';
    let body = {
      bookingItem: {
        name: userName,
        email: userEmail,
        pax: userPax,
        remarks: userRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
          "Content-Type": "application/json"
      }

    })
    .then((response) => response.json())
    .then(json => {
      alert("ID:"+json.bookingItem.id +"," + json.bookingItem.name + "succesfully added!");
    });


}