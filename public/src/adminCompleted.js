document.addEventListener("DOMContentLoaded", function() {
    const currentTime = new Date();

    document.querySelectorAll('.eventButtons').forEach(eventButton => {
        const statusChangedTime = new Date(eventButton.dataset.statusChanged);
        const timeDifference = currentTime - statusChangedTime;
        const twentyMinutes = 20 * 60 * 1000; // 20 minutes in milliseconds

        if (timeDifference > twentyMinutes) {
            eventButton.style.display = 'none';
        }
    });
});
