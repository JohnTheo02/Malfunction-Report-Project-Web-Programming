document.addEventListener("DOMContentLoaded", function() {
    const currentTime = new Date();

    document.querySelectorAll('.eventButtons').forEach(eventButton => {
        const formDate = new Date(eventButton.dataset.date);
        const timeDifference = currentTime - formDate;
        const oneMinute = 20*60*1000; //Εξαφανίζονται μετά από 20λεπτά από την στιγμή υποβολής της φόρμας

        if (timeDifference > oneMinute) {
            eventButton.style.display = 'none';
        }
    });
});
