document.addEventListener("DOMContentLoaded", function() {
    const currentTime = new Date();
    const threeHoursInMillis = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

    document.querySelectorAll('.eventButtons').forEach(eventButton => {
        const formDate = new Date(eventButton.dataset.date);
        formDate.setTime(formDate.getTime() + threeHoursInMillis); // Προσθήκη τριών ωρών

        const timeDifference = currentTime - formDate;
        const twentyMinutes = 20 * 60 * 1000; // 20 minutes in milliseconds

        if (timeDifference > twentyMinutes) {
            eventButton.style.display = 'none';
        }
    });
});
