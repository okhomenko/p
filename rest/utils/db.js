var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/p');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

var projectsSchema = mongoose.Schema({
  name: String
});

var Projects = mongoose.model('project', projectsSchema);

exports.Projects = Projects;