document.addEventListener("DOMContentLoaded", function() {
    // Προσθήκη event listener σε όλα τα στοιχεία με κλάση nav_link
    var navLinks = document.querySelectorAll('.nav_link');
    const Menu = document.querySelector(".fa-bars");
    const nav = document.querySelector(".nav");
    const only_nav = document.querySelector(".image-container");
    var mainContainer = document.querySelector('.main');
    nav.classList.toggle("active");
    Menu.classList.toggle("active");
    
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            // Καθαρίζουμε το περιεχόμενο του image-container
            var imageContainer = document.querySelector('.image-container');
            imageContainer.innerHTML = '';
            
            // Παίρνουμε το κείμενο του επιλεγμένου στοιχείου
            var selectedText = this.textContent;
            
            // Δημιουργούμε το νέο περιεχόμενο για το image-container
            switch(selectedText) {
                case 'Ανθρωπιστικών και Κοινωνικών Επιστημών':
                    addImages(['img/anthrwpistikwn/epistekp_kai_koin.png', 'img/anthrwpistikwn/epistekp_prosx.png','img/anthrwpistikwn/history.png', 'img/anthrwpistikwn/philology.png', 'img/anthrwpistikwn/philosophy.png', 'img/anthrwpistikwn/theatrikwn.png'],
                ['Τμήμα Επιστημών της Εκπαίδευσης και Κοινωνικής Εργασίας', 'Τμήμα Επιστημών της Εκπαίδευσης και της Αγωγής στην Προσχολική Ηλικία', 'Τμήμα Θεατρικών Σπουδών', 'Τμήμα Ιστορίας-Αρχαιολογίας', 'Τμήμα Φιλολογίας', 'Τμήμα Φιλοσοφίας' ]);
                Menu.classList.remove("active");
                    nav.classList.remove('active');
                    only_nav.classList.toggle("active");
                    console.log('Ο χρήστης επέλεξε το: ' + selectedText);
                    break;
                case 'Γεωπονικών Επιστημών':
                    addImages(['img/geoponia/aeiforikh_geoponia.png', 'img/geoponia/epistimh_trofhmwn.png', 'img/geoponia/geoponia.png', 'img/geoponia/udatokalliergeia.png'], 
                ['Τμήμα Αειφορικής Γεωργία', 'Τμήμα Επιστήμης και Τεχνολογίας Τροφίμων', 'Τμήμα Γεωπονίας', 'Τμήμα Αλιείας και Υδατοκαλλιεργειών']);
                    nav.classList.remove('active');
                    only_nav.classList.toggle("active");
                    Menu.classList.remove("active");
                    break;
                case 'Επιστημών Αποκατάστασης Υγείας':
                    addImages(['img/apokatastash_ugeias/fusikotherapeia.png', 'img/apokatastash_ugeias/logotherapeia.png', 'img/apokatastash_ugeias/noshleutikh.png'],
                ['Τμήμα Φυσικοθεραπείας', 'Τμήμα Λογοθεραπείας', 'Τμήμα Νοσηλευτικής']);
                    nav.classList.remove('active');
                    only_nav.classList.toggle("active");
                    Menu.classList.remove("active");
                    break;
                case 'Επιστημών Υγείας':
                    addImages(['img/ugeias/iatrikh.png', 'img/ugeias/pharmacy.png'], ['Τμήμα Ιατρικής', 'Τμήμα Φαρμακευτικής']);
                    nav.classList.remove('active');
                    only_nav.classList.toggle("active");
                    Menu.classList.remove("active");
                    break;
                case 'Θετικών Επιστημών':
                    addImages(['img/thetikwn/biology.png', 'img/thetikwn/maths.png', 'img/thetikwn/geologia.png', 'img/thetikwn/physics.png', 'img/thetikwn/epistimh_ulikwn.png', 'img/thetikwn/chemistry.png'],
                    ['Τμήμα Βιολογίας','Τμήμα Μαθηματικών', 'Τμήμα Γεωλογίας', 'Τμήμα Φυσικής', 'Τμήμα Επιστήμης των Υλικών', 'Τμήμα Χημείας']);
                    nav.classList.remove('active');
                    only_nav.classList.toggle("active");
                    Menu.classList.remove("active");
                    break;
                case 'Οικονομικών Επιστημών και Διοίκησης Επιχειρήσεων':
                    addImages(['img/oikonomikwn_episthmwn_kai_texnologias/dioikhsh_epix.png', 'img/oikonomikwn_episthmwn_kai_texnologias/dioikhsh_tourismou.png', 'img/oikonomikwn_episthmwn_kai_texnologias/dioikhtikh_ep.png', 'img/oikonomikwn_episthmwn_kai_texnologias/oikonikwn_episthmwn.png'], 
                    ['Τμήμα Διοίκησης Επιχειρήσεων','Τμήμα Διοίκησης Τουρισμού', 'Τμήμα Διοικητικής Επιστήμης και Τεχνολογίας', 'Τμήμα Οικονομικών Επιστημών']);
                    nav.classList.remove('active');
                    only_nav.classList.toggle("active");
                    Menu.classList.remove("active");
                    break;
                case 'Πολυτεχνική Σχολή':
                    addImages(['img/polutexnikh/architecture.png', 'img/polutexnikh/chemical_enginear.png', 'img/polutexnikh/ece.png', 'img/polutexnikh/mhx_hl_upolog.png', 'img/polutexnikh/mhx_kai_aeronauphgwn.png', 'img/polutexnikh/politikwn.png'],
                    ['Τμήμα Αρχιτεκτόνων Μηχανικών','Τμήμα Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών', 'Τμήμα Μηχανικών Ηλεκτρονικών Υπολογιστών και Πληροφορικής', 'Τμήμα Μηχανολόγων και Αεροναυπηγών Μηχανικών', 'Τμήμα Πολιτικών Μηχανικών', 'Τμήμα Χημικών Μηχανικών'] );
                    nav.classList.remove('active');
                    only_nav.classList.toggle("active");
                    Menu.classList.remove("active");
                    break;
                default:
                    // Αν δεν υπάρχει αντιστοίχιση, δεν κάνουμε τίποτα
                    break;
            }
            
            
        });
        Menu.addEventListener("click", () => {
            nav.classList.toggle("active")
            only_nav.classList.remove("active");
            Menu.classList.toggle("active");
            
        });
    
    });
});

// Συνάρτηση που προσθέτει εικόνες στο image-container
function addImages(imageArray, textArray) {
    var imageContainer = document.querySelector('.image-container');

    imageArray.forEach(function(imageSrc, index) {
        var imgContainer = document.createElement('a');
        imgContainer.style.border = '1px solid black';
        imgContainer.setAttribute('href', '/form1');
        imgContainer.classList.add('img', 'img' + (index + 1));

        var img = document.createElement('img');
        img.setAttribute('src', imageSrc);
        img.setAttribute('alt', 'Image ' + (index + 1));

        var paragraph = document.createElement('p');
        var strong = document.createElement('strong');
        strong.textContent = textArray[index];
        paragraph.appendChild(strong);

        imgContainer.appendChild(img);
        imgContainer.appendChild(paragraph);
        imageContainer.appendChild(imgContainer);

        imgContainer.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Ο χρήστης επέλεξε το: ' + strong.textContent);
            var selectedDepartment = document.getElementById('selectedDepartment');
            selectedDepartment.value = strong.textContent;
            document.getElementById('hiddenForm').submit();
            
        });
    
    });
}
