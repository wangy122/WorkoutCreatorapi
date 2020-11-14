var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Groups'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Members');
mobileApp.tables.add('Users');
mobileApp.tables.add('Intervals');
mobileApp.tables.add('SetList');
mobileApp.tables.add('Workout');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
