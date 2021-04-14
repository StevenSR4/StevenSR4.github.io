let refreshNowBtn= document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click",function(){
GetBooking();

});


function GetBooking(){
    let url = 'https://api.sheety.co/9192796fbfeb32fc266d9e164e704c37/tableapp/bookingitems';
fetch(url)
.then((response) => response.json())
.then(json => {

    let bookingNameList=document.getElementById("bookingNameList");
    let bookingIds=[];

    // clear the table rows
    for (let k= bookingNameList.rows.length -1; k>0;k--){
        bookingNameList.deleteRows(k);
    }

    for(let i =0; i<json.bookingitems.length; i++){
        let gName =json.bookingitems[i].name;
        let gEmail= json.bookingitems[i].email;
        let gPax= json.bookingitems[i].gpax;
        let gRemarks= json.bookingitems[i].remarks;
        let gId= json.bookingitems[i].id;
        let btnId = "delete" + gId;

        let row = bookingNameList.insertRow(bookingNameList.rows.length);
        row.insertCell(0).innerHTML=gId;
        row.insertCell(1).innerHTML=gName;
        row.insertCell(2).innerHTML=gEmail;
        row.insertCell(3).innerHTML=gPax;
        row.insertCell(4).innerHTML= gRemarks;
        row.insertCell(5).innerHTML="<button id='" + btnId +"' Class='btn btn-danger'> Delete </button>";
        

        bookingIds.push(btnId);
    }

    for (let j=0; j<bookingIds.length; j++){
        let el = document.getElementById(bookingIds[j]);
        el.addEventListener("click", function(){
            let theId = booking[j].replace("delete","");
            console.log("delete button id " + theId);

        });
    }
 
});
}