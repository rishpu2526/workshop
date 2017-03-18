var db = openDatabase("student", "1.0", "Students Database",  2 * 1024 * 1024);
db.transaction(function(tx){
    tx.executeSql("create table if not exists logs( id unique, log)");
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
});

