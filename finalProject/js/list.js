let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function () {
    GetBooking();

});


function GetBooking() {

    let url = 'https://api.sheety.co/9192796fbfeb32fc266d9e164e704c37/finalproject/bookingitems';
    fetch(url)
        .then((response) => response.json())
        .then(json => {

            let bookingNameList = document.getElementById("bookingNameList");
            let bookingIds = [];

            // clear the table rows
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k);
            }

            for (let i = 0; i < json.bookingitems.length; i++) {
                let gName = json.bookingitems[i].name;
                let gEmail = json.bookingitems[i].email;
                let gTraining = json.bookingitems[i].training;
                let gpreferabletime = json.bookingitems[i].preferabletime;
                let gRemarks = json.bookingitems[i].remarks;
                let gId = json.bookingitems[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gTraining;
                row.insertCell(3).innerHTML = gpreferabletime;
                row.insertCell(4).innerHTML = gRemarks;
                row.insertCell(5).innerHTML = "<button id='" + btnId + "' Class='btn btn-danger'> Delete </button>";


                bookingIds.push(btnId);
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");

                    DeleteBooking(theId);
                });
            }

        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/9192796fbfeb32fc266d9e164e704c37/finalproject/bookingitems/2' + id;
    fetch(url, {
        method: 'DELETE',
    })

        .then(() => {
            alert("record id" + id + "deleted!")
            GetBooking();
        });
}