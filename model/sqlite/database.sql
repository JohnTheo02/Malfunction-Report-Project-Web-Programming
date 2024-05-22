CREATE TABLE "damage_reports" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'damaged_building' TEXT,
    'class_name' TEXT NOT NULL,
    'damage_type' TEXT NOT NULL,
    'severity' TEXT NULL,
    'damage_info' TEXT,
    'file_path' TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,
    "status_changed" TEXT DEFAULT NULL,
    'additional_info' TEXT,
    'user_id' INTEGER NOT NULL,
    'location' TEXT NOT NULL,
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

CREATE TABLE "buildingsList" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'name' TEXT,
    'departments' TEXT,
    'selectedDepartment' TEXT
);

CREATE TABLE "classesList" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'name' TEXT,
    'departments' TEXT,
    'selectedDepartment' TEXT
);

CREATE TABLE "typesList" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'type' TEXT
);

CREATE TABLE "severityList" (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'name' TEXT
);

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