var appRouter = function (app) {

    app.get("/", function (req, res) {
      res.status(200).send("Welcome to RESTFUL API - NODEJS - TINK39");
    });
  
    app.post("/userinfo", function (req, res) {
      res.status(200).send("USERINFO API");
    });
    
    app.post("/login", function (req, res) {
          var user = req.body.username;
      var pass = req.body.password;	
      if (user == "hdnhattan" && pass == "123456789")
          res.status(200).send("HÀM ĐĂNG NHẬP [" + user + "/" + pass +"]");
        else		
          res.status(503).send("ERRRRRRRRRRRRR[" + user + "/" + pass +"]");
    });
    
    app.post("/register", function (req, res) {
      res.status(200).send("REGISTER API");
    });
  
  }
  
  module.exports = appRouter;