let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail= document.getElementById("userEmail").value;
    let userTrainingVal=document.getElementById ("userTraining").value;
    let userPreferabletimeVal=document.getElementById ("userPreferabletime").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    BookNow (userNameVal, userEmailVal, userTrainingVal, userPreferabletime,userRemarksVal);

});

function BookNow (userName, userEmail, userTraining,userPreferabletime,userRemarks){
    
    let url = 'https://api.sheety.co/9192796fbfeb32fc266d9e164e704c37/finalproject/bookingitems';
    let body = {
      bookingitem: {
        name: userName,
        email: userEmail,
        training: userTraining,
        preferabletime:userPreferabletime,
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
      alert("ID:"+ json.bookingitem.id +"," + json.bookingitem.name + "succesfully added!");
    });
}  