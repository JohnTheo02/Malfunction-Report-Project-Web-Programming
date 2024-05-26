document.addEventListener("DOMContentLoaded", function() {
    const currentTime = moment().tz("Europe/Athens"); // Current Time in Athens 
    console.log("Current Time:", currentTime.format('YYYY-MM-DD HH:mm:ss'));

    document.querySelectorAll('.eventButtons').forEach(eventButton => {
        const statusChanged = eventButton.dataset.statusChanged;
        const formDate = moment.tz(statusChanged, "Europe/Athens"); 
        const timeDifference = currentTime.diff(formDate);
        const twentyMinutes = 20 * 60 * 1000; // 20 mins in ms

        if (timeDifference > twentyMinutes) {
            eventButton.style.display = 'none';
        }
    });
});