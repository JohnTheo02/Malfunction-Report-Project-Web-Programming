document.addEventListener("DOMContentLoaded", function() {
    const moment = require('moment-timezone'); // Βεβαιώσου ότι έχεις τη βιβλιοθήκη moment-timezone

    const currentTime = moment().tz("Europe/Athens").toDate(); // Τρέχουσα ώρα σε ώρα Αθήνας

    document.querySelectorAll('.eventButtons').forEach(eventButton => {
        const statusChangedTime = moment(eventButton.dataset.statusChanged).tz("Europe/Athens").toDate(); // Ώρα αλλαγής κατάστασης σε ώρα Αθήνας

        const timeDifference = currentTime - statusChangedTime;
        const twentyMinutes = 20 * 60 * 1000; // 20 minutes in milliseconds

        if (timeDifference > twentyMinutes) {
            eventButton.style.display = 'none';
        }
    });
});
