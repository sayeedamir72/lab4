exports.viewProject = function(req, res) {
  var name = req.params.name;
  console.log("The proejct name is: " + name);
  res.render('project', {
    'projectName' : name
  });
}

