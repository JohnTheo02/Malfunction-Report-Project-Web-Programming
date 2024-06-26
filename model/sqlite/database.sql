DROP TABLE IF EXISTS `damage_reports`;
CREATE TABLE "damage_reports" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'damaged_building' TEXT DEFAULT "Δηλώθηκαν συντεταγμένες της βλάβης",
    'class_name' TEXT NOT NULL,
    'damage_type' TEXT NOT NULL,
    'severity' TEXT DEFAULT "Δεν γνωρίζω",
    'damage_info' TEXT,
    'file_path' BLOB,
    "status" INTEGER NOT NULL DEFAULT 1,
    "status_changed" TEXT DEFAULT NULL,
    'additional_info' TEXT,
    'user_id' INTEGER NOT NULL,
    'location' TEXT DEFAULT "Δεν καταχωρήθηκαν συντεταγμένες από τον χρήστη",
    'admin_comments' TEXT DEFAULT NULL,
    'date' TEXT DEFAULT (datetime('now', 'localtime')),
    
    FOREIGN KEY('user_id') REFERENCES 'user'('id') ON DELETE CASCADE
);

DROP TABLE IF EXISTS `user`;
CREATE TABLE 'user'(
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'username' TEXT NOT NULL,
    'password' TEXT NOT NULL UNIQUE,
    'email' TEXT NOT NULL
);

DROP TABLE IF EXISTS `buildingsList`;
CREATE TABLE "buildingsList" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'name' TEXT,
    'departments' TEXT,
    'selectedDepartment' TEXT
);

DROP TABLE IF EXISTS `classesList`;
CREATE TABLE "classesList" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'name' TEXT,
    'departments' TEXT,
    'selectedDepartment' TEXT
);

DROP TABLE IF EXISTS `typesList`;
CREATE TABLE "typesList" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'type' TEXT
);

DROP TABLE IF EXISTS `severityList`;
CREATE TABLE "severityList" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'name' TEXT
);

DROP TABLE IF EXISTS `temp_location`;
CREATE TABLE "temp_location" (
    "id"    INTEGER PRIMARY KEY AUTOINCREMENT,
    'user_id' INTEGER NOT NULL,
    "location"    TEXT NOT NULL,
    FOREIGN KEY('user_id') REFERENCES 'user'('id') ON DELETE CASCADE
);

DROP TABLE IF EXISTS `admin`;
CREATE TABLE 'admin'(
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'email' TEXT NOT NULL UNIQUE,
    'password' TEXT NOT NULL
);