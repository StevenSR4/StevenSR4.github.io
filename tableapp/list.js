let refreshNowBtn= document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click",function(){
alert("GetBooking");
});


function GetBooking(){
    let url = 'https://api.sheety.co/9192796fbfeb32fc266d9e164e704c37/tableapp/bookingItem';
fetch(url)
.then((response) => response.json())
.then(json => {
    let bookingNameList=document.getElementById("bookingNameList");

    // clear the table rows
    for (let k= bookingNameList.rows.length -1; k>0;k--){
        bookingNameList.deleteRows(k);
    }

    for(let i =0; i<json.bookingItems.length; i++){
        let gName =json.bookingItems[i].name;
        let gEmail= json.bookingItems[i].email;
        let gPax= json.bookingItems[i].gpax;
        let gRemarks= json.bookingItems[i].email;
        let gId= json.bookingItems[i].id;

        let row = bookingNameList.insertRow(bookingNameList.rows.length);
        row.insertCell(0).innerHTML=gId;
        row.insertCell(1).innerHTML=gName;
        row.insertCell(2).innerHTML=gEmail;
        row.insertCell(3).innerHTML=gPax;
        row.insertCell(4).innerHTML= gRemarks;
        row.insertCell(5).innerHTML="<button id='" + gId +"' Class='btn btn-danger'>Delete</button>";
        
    }
 
});
}