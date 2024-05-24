# Εφαρμογή Δήλωσης Βλαβών στο Πανεπιστήμιο Πατρών ΟΜΑΔΑ 9
# Malfunction Reporting Application for University of Patras ΤΕΑΜ 9


---

#### Description 

URL: [https://malfunctionreport-26370e429b90.herokuapp.com/](https://malfunctionreport-26370e429b90.herokuapp.com/)

---

#### Creators 

Giannis Theodorou
Dimitris Gounelas

---

### Dependencies Installation


```bash
npm install 
```

In order to install all the required dependencies for the application open your terminal and run the above command.


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


### Run the application locally

###### Run the following command

```bash
npm run watch
```



---

The application is now running locally to http://localhost:3000/