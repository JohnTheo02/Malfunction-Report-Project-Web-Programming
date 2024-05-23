document.addEventListener("DOMContentLoaded", function() {
    const currentTime = moment().tz("Europe/Athens"); // Τρέχουσα ώρα σε ώρα Αθήνας
    console.log("Current Time:", currentTime.format('YYYY-MM-DD HH:mm:ss'));

    document.querySelectorAll('.eventButtons').forEach(eventButton => {
        const statusChanged = eventButton.dataset.statusChanged;
        const formDate = moment.tz(statusChanged, "Europe/Athens"); // Ώρα φόρμας σε ώρα Αθήνας
        const timeDifference = currentTime.diff(formDate);
        const twentyMinutes = 20 * 60 * 1000; // 20 λεπτά σε milliseconds

        if (timeDifference > twentyMinutes) {
            eventButton.style.display = 'none';
        }
    });
});