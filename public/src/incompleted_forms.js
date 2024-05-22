document.addEventListener("DOMContentLoaded", function() {
    const currentTime = moment().tz("Europe/Athens"); // Τρέχουσα ώρα σε ώρα Αθήνας

    document.querySelectorAll('.eventButtons').forEach(eventButton => {
        const formDate = moment.tz(eventButton.dataset.date, "Europe/Athens"); // Ώρα φόρμας σε ώρα Αθήνας

        const timeDifference = currentTime.diff(formDate);
        const twentyMinutes = 20 * 60 * 1000; // 20 λεπτά σε milliseconds

        if (timeDifference > twentyMinutes) {
            eventButton.style.display = 'none';
        }
    });
});
