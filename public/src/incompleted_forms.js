document.addEventListener("DOMContentLoaded", function () {
    const currentTime = moment().tz("Europe/Athens"); // Current Time in Athens Timezone
    console.log("Current Time:", currentTime.format('YYYY-MM-DD HH:mm:ss'));

    document.querySelectorAll('.eventButtons').forEach(eventButton => {
        const dateAttr = eventButton.dataset.date;
        const formDate = moment.tz(dateAttr, "Europe/Athens"); // Form sumbit time in Athens Timezone

        const timeDifference = currentTime.diff(formDate);

        const fiveMinutes = 5 * 60 * 1000; // 5 min in milliseconds
        const oneMinute = 1 * 60 * 1000;  // 1 mins in milliseconds

        const editButton = eventButton.querySelector('.editBtnLabel');
        const deleteButton = eventButton.querySelector('.eraseBtnLabel');

        if (timeDifference > fiveMinutes) {
            editButton.style.display = 'none';
        }

        if (timeDifference > oneMinute) {
            deleteButton.style.display = 'none';
        }
    });
});



function confirmDelete(id) {
    var result = confirm("Είστε σίγουρος/η ότι θέλετε να διαγράψετε τη δήλωση;"); //Confirmation

    if (result) {
        window.location.href = "/editform/delete/" + id;
    }
}

