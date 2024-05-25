# Εφαρμογή Δήλωσης Βλαβών στο Πανεπιστήμιο Πατρών ΟΜΑΔΑ 9

#### Mobile application

---

#### Public URL 

URL: [https://malfunctionreport-26370e429b90.herokuapp.com/](https://malfunctionreport-26370e429b90.herokuapp.com/)
or scan the QR:

![malfunction_report_qr_RESIZED](https://github.com/JohnTheo02/Malfunction-Report-Project-Web-Programming/assets/160852499/5e94091e-edea-4f4f-b9b0-a6893088a0cf)


###### for better experience and access to your exact location browse it form Chrome, Mozilla or Edge

---

### Description 

Our application is mainly for mobile use and is constructed for reporting a damage/malfunction in University of Patras.

---


#### Creators 


Dimitris Gounelas

Giannis Theodorou

---

### Dependencies Installation

To install all the required dependencies for the application open your terminal and run the following command:

```bash
npm install 
```

---

### Database Creation

Open your terminal and run the following command:

```bash
cd change/path/to/model/sqlite
```

where the change/path/to/model/sqlite is your path to sqlite folder.

After that run the following command:

```bash
node populateDb.js
```

After running the above command the database has been created in ../model/sqlite/database.sqlite

----

### Run the application locally

###### After installing the required dependencies and the Database run the following command:

```bash
npm run watch
```



---

The application is now running locally to http://localhost:3000/
