document.addEventListener("DOMContentLoaded", function () {
    const currentTime = moment().tz("Europe/Athens"); // Τρέχουσα ώρα σε ώρα Αθήνας
    console.log("Current Time:", currentTime.format('YYYY-MM-DD HH:mm:ss'));

    document.querySelectorAll('.eventButtons').forEach(eventButton => {
        const dateAttr = eventButton.dataset.date;
        const formDate = moment.tz(dateAttr, "Europe/Athens"); // Ώρα φόρμας σε ώρα Αθήνας

        const timeDifference = currentTime.diff(formDate);

        const twentyMinutes = 20 * 60 * 1000; // 20 λεπτά σε milliseconds

        if (timeDifference > twentyMinutes) {
            eventButton.style.display = 'none';
        }
    });
});


function confirmDelete(id) {
    var result = confirm("Είστε σίγουρος/η ότι θέλετε να διαγράψετε τη δήλωση;");

    if (result) {
        window.location.href = "/editform/delete/" + id;
    }
}

