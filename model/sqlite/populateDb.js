'use strict';
const db = require('better-sqlite3')
const bcrypt = require('bcrypt');
const fs = require('fs');
const sql = new db('database.sqlite');

let data = fs.readFileSync('./database.sql', 'utf8');

const sqlStatements = data.split(';');

sqlStatements.pop();

for (let i = 0; i < sqlStatements.length; i++) {
    let stmt = sql.prepare(sqlStatements[i]);
    stmt.run();
}

// Populate admin table with 2 admin users
var adminEmail = ['admin1', 'admin2'];
var adminPassword = ['admin1', 'admin2'];

for (let i = 0; i < adminEmail.length; i++) {
    let hashedPassword = bcrypt.hashSync(adminPassword[i], 10);
    let stmt = sql.prepare("INSERT INTO admin VALUES (null, ?, ?)");
    stmt.run(adminEmail[i], hashedPassword);
}



var htmyBuildings = ['Βαρέα ΗΜΤΥ', 'Επέκταση ΗΜΤΥ', 'Πολυόροφο ΗΜΤΥ', 'Άλλο'];
var arxitBuildings = ['Αρχιτεκτονική Βιβλιοθήκη', 'Κτίριο Β', 'Σχεδιαστήριο Σ1', 'Σχεδιαστήριο Σ2', 'Σχεδιαστήριο Σ3']
var hmtyClasses = ['ΗΛ1', 'ΗΛ2', 'ΗΛ3', 'ΗΛ4', 'ΗΛ5', 'ΗΛ6', 'ΗΛ7', 'ΗΛ8'];
var arxitClasses = ['Εργαστήριο Οικοδομής', 'Αίθουσα Β3', 'Αίθουσα Β4', 'Αίθουσα Εικαστικών 1', 'Αίθουσα Εικαστικών 2', 'Αίθουσα Εικαστικών 3', 'Σ1', 'Σ2', 'Σ3', 'Σ4', 'Σ5',]
var damageType = ['Ηλεκτρολογική βλάβη', 'Υδραυλική βλάβη', 'Οικοδομική βλάβη', 'Άλλο'];
var severity = ['Μικρή', 'Μεσαία', 'Μεγάλη', 'Δεν γνωρίζω'];


//Τμήμα Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών
for (let i = 0; i < htmyBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(htmyBuildings[i], 'Τμήμα Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών');
}
for (let i = 0; i < hmtyClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(hmtyClasses[i], 'Τμήμα Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών');
}
//Τμήμα Αρχιτεκτόνων Μηχανικών
for (let i = 0; i < arxitBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(arxitBuildings[i], 'Τμήμα Αρχιτεκτόνων Μηχανικών');
}

for (let i = 0; i < arxitClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(arxitClasses[i], 'Τμήμα Αρχιτεκτόνων Μηχανικών');
}

//Τμήμα Επιστημών της Εκπαίδευσης και Κοινωνικής Εργασίας
var epEkpKoinErgBuildings = ['Κτίριο Επιστημών της Εκπαίδευσης και Κοινωνικής Εργασίας'];
var epEkpKoinErgClasses = ['Τ10', 'Τ11', 'Τ12', 'Τ13', 'Τ14', 'Τ15', 'Τ17'];

for (let i = 0; i < epEkpKoinErgBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(epEkpKoinErgBuildings[i], 'Τμήμα Επιστημών της Εκπαίδευσης και Κοινωνικής Εργασίας');
}

for (let i = 0; i < epEkpKoinErgClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(epEkpKoinErgClasses[i], 'Τμήμα Επιστημών της Εκπαίδευσης και Κοινωνικής Εργασίας');
}

//Τμήμα Επιστημών της Εκπαίδευσης και της Αγωγής στην Προσχολική Ηλικία

var epEkpAgProsxHlBuildings = ['Συγκρότημα Προκατασκευασμένων Κτιρίων'];
var epEkpAgProsxHlClasses = ['ΑΕ', 'ΑΘΕ 5', 'ΑΘΕ 7', 'Αίθουσα εποπτικών μέσων', 'Αίθουσα ραδιοφωνικού σταθμού', 'Κ21'];

for (let i = 0; i < epEkpAgProsxHlBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(epEkpAgProsxHlBuildings[i], 'Τμήμα Επιστημών της Εκπαίδευσης και της Αγωγής στην Προσχολική Ηλικία');
}

for (let i = 0; i < epEkpKoinErgClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(epEkpKoinErgClasses[i], 'Τμήμα Επιστημών της Εκπαίδευσης και της Αγωγής στην Προσχολική Ηλικία');
}

//'Τμήμα Θεατρικών Σπουδών'
var theatrikwnSpoudwnBuildings = ['Κτίριο Τμήματος Θεατρικών Σπουδών', 'Συγκρότημα Προκατασκευασμένων Κτιρίων'];
var theatrikwnSpoudwnClasses = ['Α1', 'Αίθουσα Η/Υ του ΤΘΣ', 'Β2', 'Βιβλιοθήκη ΤΘΣ', 'Βπ', 'Βσ', 'Κ11', 'ΠΑΜ11'];

for (let i = 0; i < theatrikwnSpoudwnBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(theatrikwnSpoudwnBuildings[i], 'Τμήμα Θεατρικών Σπουδών');
}

for (let i = 0; i < theatrikwnSpoudwnClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(theatrikwnSpoudwnClasses[i], 'Τμήμα Θεατρικών Σπουδών');
}


//'Τμήμα Ιστορίας-Αρχαιολογίας'
var istoriaArxaiolBuildings = ['Κτίριο Β'];
var istoriaArxaiolClasses = ['Αίθουσα Β11', 'Αίθουσα Β12'];

for (let i = 0; i < istoriaArxaiolBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(istoriaArxaiolBuildings[i], 'Τμήμα Ιστορίας-Αρχαιολογίας');
}

for (let i = 0; i < istoriaArxaiolClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(istoriaArxaiolClasses[i], 'Τμήμα Ιστορίας-Αρχαιολογίας');
}


//'Τμήμα Φιλολογίας'
var filologiaBuildings = ['Συγκρότημα Προκατασκευασμένων Κτιρίων'];
var filologiaClasses = ['ΑΔ', 'ΑΘΕ 6', 'Κ9', 'Όλγα Βαρτζιώτη', 'ΠΑΜ14'];

for (let i = 0; i < filologiaBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(filologiaBuildings[i], 'Τμήμα Φιλολογίας');
}

for (let i = 0; i < filologiaClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(filologiaClasses[i], 'Τμήμα Φιλολογίας');
}

//'Τμήμα Φιλοσοφίας'
var filosofiaBuildings = ['Συγκρότημα Προκατασκευασμένων Κτιρίων'];
var filosofiaClasses = ['Αίθουσα Β11', 'Αίθουσα Β12', 'Αίθουσα ραδιοφωνικού σταθμού', 'Αίθουσα ΦΙΛ1', 'ΑΠ2', 'ΑΠ4', 'ΑΠ8', 'Κ21', 'ΧΗ7(ΝΝΚ)'];

for (let i = 0; i < filosofiaBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(filosofiaBuildings[i], 'Τμήμα Φιλοσοφίας');
}

for (let i = 0; i < filosofiaClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(filosofiaClasses[i], 'Τμήμα Φιλοσοφίας');
}


//'Τμήμα Αειφορικής Γεωργία'
var aeiforikhsGewrgBuildings = ['Κτίριο Α Αγρίνιο', 'Κτίριο Β Αγρίνιο'];
var aeiforikhsGewrgClasses = ['Αίθουσα 4', 'Αίθουσα 5', 'Αίθουσα 6'];

for (let i = 0; i < aeiforikhsGewrgBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(aeiforikhsGewrgBuildings[i], 'Τμήμα Αειφορικής Γεωργία');
}

for (let i = 0; i < aeiforikhsGewrgClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(aeiforikhsGewrgClasses[i], 'Τμήμα Αειφορικής Γεωργία');
}

//'Τμήμα Επιστήμης και Τεχνολογίας Τροφίμων'
var epTexnTrofimwnBuildings = ['Κτίριο Α Αγρίνιο', 'Κτίριο Β Αγρίνιο'];
var epTexnTrofimwnClasses = ['Αίθουσα 1', 'Αίθουσα 2', 'Αίθουσα 7', 'Αίθουσα 8', 'Αμφιθέατρο Αγρινίου'];

for (let i = 0; i < epTexnTrofimwnBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(epTexnTrofimwnBuildings[i], 'Τμήμα Επιστήμης και Τεχνολογίας Τροφίμων');
}

for (let i = 0; i < epTexnTrofimwnClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(epTexnTrofimwnClasses[i], 'Τμήμα Επιστήμης και Τεχνολογίας Τροφίμων');
}

//'Τμήμα Γεωπονίας'
var gewponiaBuildings = ['Θερμοκήπιο Θ1', 'Θερμοκήπιο Θ2', 'Θερμοκήπιο Θ3', 'Κτίριο Κ24 Μεσολόγγι', 'Κτίριο Κ3 Μεσολόγγι'];
var gewponiaClasses = ['Α-12', 'Α-13', 'Α-14 & Α-15', 'Ι-14', 'Ι-15 & Ι-16', 'Ι-17 & Ι-18', 'Μικρό Αμφιθέατρο'];

for (let i = 0; i < gewponiaBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(gewponiaBuildings[i], 'Τμήμα Γεωπονίας');
}

for (let i = 0; i < gewponiaClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(gewponiaClasses[i], 'Τμήμα Γεωπονίας');
}

//'Τμήμα Αλιείας και Υδατοκαλλιεργειών'
var alieiaYdatokalBuildings = ['Κ1 Γραμματεία Σχολής Γεωπονικών Επιστημών', 'Κτίριο Κ6 Μεσολόγγι', 'Κτίριο Κ7 Μεσολόγγι', 'Κτίριο Κ8 Μεσολόγγι', 'Κτίριο Κ10 Μεσολόγγι', 'Κτίριο Κ11 Μεσολόγγι'];
var alieiaYdatokalClasses = ['ΕΠΔΟ 1', 'ΕΠΔΟ 2', 'ΕΠΔΟ 3', 'ΕΠΔΟ 4', 'ΕΠΔΟ 5', 'Ιχυοκαλλιέργειας Αιθ. Προβολών', 'Ιχθυοκαλλιέργειας Δ', 'Μεγάλο Αμφιθέατρο'];

for (let i = 0; i < alieiaYdatokalBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(alieiaYdatokalBuildings[i], 'Τμήμα Αλιείας και Υδατοκαλλιεργειών');
}

for (let i = 0; i < alieiaYdatokalClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(alieiaYdatokalClasses[i], 'Τμήμα Αλιείας και Υδατοκαλλιεργειών');
}


//'Τμήμα Φυσικοθεραπείας'
var fusikotherapeiaBuildings = ['Κτίριο Β'];
var fusikotherapeiaClasses = ['Αίθουσα Β11', 'Αίθουσα Β12', 'Αίθουσα ΦΣ1'];

for (let i = 0; i < fusikotherapeiaBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(fusikotherapeiaBuildings[i], 'Τμήμα Φυσικοθεραπείας');
}

for (let i = 0; i < fusikotherapeiaClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(fusikotherapeiaClasses[i], 'Τμήμα Φυσικοθεραπείας');
}

//'Τμήμα Λογοθεραπείας'
var logotherapeiaBuildings = ['Συγκρότημα Κτιρίων ΠΑΜ'];
var logotherapeiaClasses = ['ΠΑΜ1', 'ΠΑΜ2', 'ΠΑΜ13', 'ΠΑΜ16'];

for (let i = 0; i < logotherapeiaBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(logotherapeiaBuildings[i], 'Τμήμα Λογοθεραπείας');
}

for (let i = 0; i < logotherapeiaClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(logotherapeiaClasses[i], 'Τμήμα Λογοθεραπείας');
}

//'Τμήμα Νοσηλευτικής'
var noshleutikhBuildings = ['Κτίριο Τμήματος Νοσηλευτικής'];
var noshleutikhClasses = ['Α1', 'Α2', 'Α3', 'Α4', 'Α5'];

for (let i = 0; i < noshleutikhBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(noshleutikhBuildings[i], 'Τμήμα Νοσηλευτικής');
}

for (let i = 0; i < noshleutikhClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(noshleutikhClasses[i], 'Τμήμα Νοσηλευτικής');
}


//'Τμήμα Ιατρικής'
var iatrikhBuildings = ['Κτιριακό Συγκρότημα Κλινικών Λειτουριών', 'Κτίριο Αμφιθεάτρων Ιατρικής και Βιβλιοθήκης', 'Κτίριο Προκλινικών Λειτουργιών'];
var iatrikhClasses = ['ΑΙ1', 'ΑΙ2', 'ΑΙ3', 'Ε2'];

for (let i = 0; i < iatrikhBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(iatrikhBuildings[i], 'Τμήμα Ιατρικής');
}

for (let i = 0; i < iatrikhClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(iatrikhClasses[i], 'Τμήμα Ιατρικής');
}

//'Τμήμα Φαρμακευτικής'
var pharmacyBuildings = ['Κτιριακό Συγκρότημα Κλινικών Λειτουριών', 'Κτίριο Φαρμακευτικής'];
var pharmacyClasses = ['ΑΙ4', 'Αίθουσα Διδασκαλίας Διονύσιος Ιθακήσιος', 'Αμφιθέατρο Εκδηλώσεων Παύλος Κορδοπάτης', 'Ε1', 'ΠΑΜ8', 'ΠΑΜ9', 'ΠΑΜ10'];

for (let i = 0; i < pharmacyBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(pharmacyBuildings[i], 'Τμήμα Φαρμακευτικής');
}

for (let i = 0; i < pharmacyClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(pharmacyClasses[i], 'Τμήμα Φαρμακευτικής');
}

//'Τμήμα Βιολογίας'
var biologyBuildings = ['Κτίριο Βιολογίας-Μαθηματικού'];
var biologyClasses = ['ΒΜ3-060/061', 'ΒΜ4-069/070', 'ΒΜ5-071/072', 'ΒΜ8-025-026'];

for (let i = 0; i < biologyBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(biologyBuildings[i], 'Τμήμα Βιολογίας');
}

for (let i = 0; i < biologyClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(biologyClasses[i], 'Τμήμα Βιολογίας');
}

//'Τμήμα Μαθηματικών'
var mathsBuildings = ['Κτίριο Βιολογίας-Μαθηματικού'];
var mathsClasses = ['ΑΘΕ1', 'ΑΘΕ2', 'ΑΘΕ8', 'ΑΘΕ9', 'ΑΘΕ12', 'Αμφιθέατρο ΑΑ', 'ΒΜ1-063', 'ΒΜ2-062'];

for (let i = 0; i < mathsBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(mathsBuildings[i], 'Τμήμα Μαθηματικών');
}

for (let i = 0; i < mathsClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(mathsClasses[i], 'Τμήμα Μαθηματικών');
}

//'Τμήμα Γεωλογίας'
var geologyBuildings = ['Κτίριο Γεωλογίας'];
var geologyClasses = ['Αίθουσα 1', 'Αίθουσα 2', 'Αίθουσα 25', 'Αίθουσα 26'];

for (let i = 0; i < geologyBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(geologyBuildings[i], 'Τμήμα Γεωλογίας');
}

for (let i = 0; i < geologyClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(geologyClasses[i], 'Τμήμα Γεωλογίας');
}

//'Τμήμα Φυσικής'
var physicsBuildings = ['Κτίριο Φυσικής Α', 'Κτίριο Φυσικής Β', 'Κτίριο Φυσικής Γ'];
var physicsClasses = ['ΑΘΕ 4', 'ΑΘΕ 11', 'Φ2', 'Φ3', 'Φ5', 'Φ6', 'Φ7'];

for (let i = 0; i < physicsBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(physicsBuildings[i], 'Τμήμα Φυσικής');
}

for (let i = 0; i < physicsClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(physicsClasses[i], 'Τμήμα Φυσικής');
}

//'Τμήμα Επιστήμης των Υλικών'
var episthmhsYlikwnBuildings = ['Συγκρότημα Προκατασκευασμένων Κτιρίων'];
var episthmhsYlikwnClasses = ['ΑΘΕ 3', 'ΑΘΕ 5', 'ΠΑΜ 7', 'ΠΑΜ 8', 'Φ4'];

for (let i = 0; i < episthmhsYlikwnBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(episthmhsYlikwnBuildings[i], 'Τμήμα Επιστήμης των Υλικών');
}

for (let i = 0; i < episthmhsYlikwnClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(episthmhsYlikwnClasses[i], 'Τμήμα Επιστήμης των Υλικών');
}

//'Τμήμα Χημείας'
var chemistryBuildings = ['Βόρειο Χημείας', 'Επέκταση Νοτίου Χημείας', 'Νότιο Χημείας'];
var chemistryClasses = ['ΧΗ ', 'ΧΗ2', 'ΧΗ3', 'ΧΗ4', 'ΧΗ5', 'ΧΗ6', 'ΑΘΕ 10'];

for (let i = 0; i < chemistryBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(chemistryBuildings[i], 'Τμήμα Χημείας');
}

for (let i = 0; i < chemistryClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(chemistryClasses[i], 'Τμήμα Χημείας');
}


//'Τμήμα Διοίκησης Επιχειρήσεων'
var dioikhshEpixBuildings = ['Συγκρότημα Κτιρίων ΠΑΜ'];
var dioikhshEpixClasses = ['ΠΑΜ15', 'ΠΑΜ17', 'ΠΑΜ3', 'ΠΑΜ4', 'ΠΑΜ5', 'ΠΑΜ6'];

for (let i = 0; i < dioikhshEpixBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(dioikhshEpixBuildings[i], 'Τμήμα Διοίκησης Επιχειρήσεων');
}

for (let i = 0; i < dioikhshEpixClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(dioikhshEpixClasses[i], 'Τμήμα Διοίκησης Επιχειρήσεων');
}

//'Τμήμα Διοίκησης Τουρισμού'
var dioikhshTourismouBuildings = ['Κτίριο Τμήματος Διοίκησης Τουρισμού'];
var dioikhshTourismouClasses = ['ΔΤ 0.1', 'ΔΤ 0.2', 'ΔΤ 0.4', 'ΔΤ 1.2', 'ΔΤ 1.3', 'ΔΤ 1.6', 'ΔΤ 2.3'];

for (let i = 0; i < dioikhshTourismouBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(dioikhshTourismouBuildings[i], 'Τμήμα Διοίκησης Τουρισμού');
}

for (let i = 0; i < dioikhshTourismouClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(dioikhshTourismouClasses[i], 'Τμήμα Διοίκησης Τουρισμού');
}

//'Τμήμα Διοικητικής Επιστήμης και Τεχνολογίας'
var dioikEpistTexnBuildings = ['ΔΕΤα', 'ΔΕΤβ'];
var dioikEpistTexnClasses = ['ΔΕΤβ 0.1', 'ΔΕΤβ 0.4', 'ΔΕΤβ 1.1', 'ΔΕΤβ 1.2', 'ΔΕΤβ 1.3', 'ΔΕΤβ 1.4', 'ΔΕΤβ 1.5', 'ΔΕΤβ 1.6', 'ΔΕΤβ 1.7', 'ΔΤ 0.4', 'ΔΤ 0.5'];

for (let i = 0; i < dioikEpistTexnBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(dioikEpistTexnBuildings[i], 'Τμήμα Διοικητικής Επιστήμης και Τεχνολογίας');
}

for (let i = 0; i < dioikEpistTexnClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(dioikEpistTexnClasses[i], 'Τμήμα Διοικητικής Επιστήμης και Τεχνολογίας');
}

//'Τμήμα Οικονομικών Επιστημών'
var oikonEpistBuildings = ['Κτίριο Οικονομικών Επιστημών'];
var oikonEpistClasses = ['Α.1.1', 'Α.1.2', 'Α.1.3', 'Α.2.1', 'ΑΜΦ.1', 'ΑΜΦ.2', 'ΑΜΦ.3', 'ΑΜΦ.4', 'ΑΜΦ.5', 'ΑΜΦ.1.1', 'ΑΜΦ.1.2'];

for (let i = 0; i < oikonEpistBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(oikonEpistBuildings[i], 'Τμήμα Οικονομικών Επιστημών');
}

for (let i = 0; i < oikonEpistClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(oikonEpistClasses[i], 'Τμήμα Οικονομικών Επιστημών');
}

//'Τμήμα Μηχανικών Ηλεκτρονικών Υπολογιστών και Πληροφορικής'
var mhxaHlekYpolPlhrBuildings = ['Κτίριο Μηχανικών Ηλεκτρονικών Υπολογιστών και Πληροφορικής'];
var mhxaHlekYpolPlhrClasses = ['Αίθουσα Β', 'Αμφιθέατρο Γ', 'ΑΠ3', 'ΑΠ7', 'Δ1', 'Δ2', 'Ε1', 'Ε2'];

for (let i = 0; i < mhxaHlekYpolPlhrBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(mhxaHlekYpolPlhrBuildings[i], 'Τμήμα Μηχανικών Ηλεκτρονικών Υπολογιστών και Πληροφορικής');
}

for (let i = 0; i < mhxaHlekYpolPlhrClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(mhxaHlekYpolPlhrClasses[i], 'Τμήμα Μηχανικών Ηλεκτρονικών Υπολογιστών και Πληροφορικής');
}

//'Τμήμα Μηχανολόγων και Αεροναυπηγών Μηχανικών'
var mhxAeronaMhxanBuildings = ['Βαρέα Μηχανολόγων και Αεροναυπηγών Μηχανικών', 'Νέο Κτήριο Μηχανολόγων και Αεροναυπηγών Μηχανικών', 'Πολυώροφο Κτίριο Μηχανολόγων & Αεροναυπηγών Μηχανικών'];
var mhxAeronaMhxanClasses = ['Αμφιθέατρο Βιβλιοθήκης', 'ΑΠ1', 'ΑΠ5', 'ΑΠ6', 'ΧΗ8(ΒΝΚ)', 'ΧΜ7'];

for (let i = 0; i < mhxAeronaMhxanBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(mhxAeronaMhxanBuildings[i], 'Τμήμα Μηχανολόγων και Αεροναυπηγών Μηχανικών');
}

for (let i = 0; i < mhxAeronaMhxanClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(mhxAeronaMhxanClasses[i], 'Τμήμα Μηχανολόγων και Αεροναυπηγών Μηχανικών');
}

//'Τμήμα Πολιτικών Μηχανικών'
var politikwnMhxBuildings = ['Κτίριο Πολιτικών Μηχανικών'];
var politikwnMhxClasses = ['ΑΠΜ1(ΑΜΦ.Ν.ΜΑΣΤΡΟΓΙΑΝΝΗ)', 'ΑΠΜ2', 'ΑΠΜ3', 'ΑΠΜ4', 'ΠΜ1', 'ΠΜ2', 'ΠΜ3', 'ΠΜ4', 'Σχεδιαστήριο'];

for (let i = 0; i < politikwnMhxBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(politikwnMhxBuildings[i], 'Τμήμα Πολιτικών Μηχανικών');
}

for (let i = 0; i < politikwnMhxClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(politikwnMhxClasses[i], 'Τμήμα Πολιτικών Μηχανικών');
}

//'Τμήμα Χημικών Μηχανικών'
var chemistryMhxBuildings = ['Επέκταση Χημικών Μηχανικών', 'Κτίριο Χημικών Μηχανικών'];
var chemistryMhxClasses = ['ΧΜ1', 'ΧΜ3', 'ΧΜ4', 'ΧΜ5', 'ΧΜ6'];

for (let i = 0; i < chemistryMhxBuildings.length; i++) {
    let stmt = sql.prepare("INSERT INTO buildingsList VALUES (null, ?, ?, null)");
    stmt.run(chemistryMhxBuildings[i], 'Τμήμα Χημικών Μηχανικών');
}

for (let i = 0; i < chemistryMhxClasses.length; i++) {
    let stmt = sql.prepare("INSERT INTO classesList VALUES (null, ?, ?, null)");
    stmt.run(chemistryMhxClasses[i], 'Τμήμα Χημικών Μηχανικών');
}

//Για όλα τα τμήματα
for (let i = 0; i < damageType.length; i++) {
    let stmt = sql.prepare("INSERT INTO typesList (type) VALUES (?)");
    stmt.run(damageType[i]);
}

for (let i = 0; i < severity.length; i++) {
    let stmt = sql.prepare("INSERT INTO severityList (name) VALUES (?)");
    stmt.run(severity[i]);
}
