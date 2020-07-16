var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    
    res.render("form");
});

app.post("/submit", function(req, res) {
    
    //res.send("<p>Congrats you posted it!</p>")
    //console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var address = req.body.address; 
    var city = req.body.city;
    var state = req.body.state;
    var zip = req.body.zip;
    var month = req.body.month;
    var day = req.body.day;
    var year = req.body.year;
    var educationlevel = req.body.educationlevel;
    var feet = req.body.feet;
    var inches = req.body.inches;
    var phonenumber = req.body.phonenumber;
    var email = req.body.email;

    /*
    firstname: 'kevin',
    lastname: 'zhou',
    address: '1234 john',
    city: 'daly city',
    state: 'CA',
    zip: '43534',
    month: '12',
    day: '23',
    year: '1212',
    educationlevel: 'College',
    inches: '3',
    phonenumber: '415-000-0000',
    email: '123@gmail.com',
    confirmemail: '123@gmail.com',
    */

    var kevin = ("" +
    
    "<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js\"></script>" +
    
    "<div id=\"header\" class=\"form-row\">" +
    "<p class=\"header-area\">" + "Thank you for submitting your data survey form! Here is your submitted information:" + "</p>" +
    "</div>" +

    "<div class=\"container\"> " +
    "<div id=\"header\" class=\"form-row  begin\">" +
    "<p>" + "Your Name is below: " + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your First Name: " + firstname + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Last Name: " + lastname + "</p>" +
    "</div>" +
    "<div id=\"header\" class=\"form-row\">" +
    "<p>" + "Your Address is below: " + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Address: " + address + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your City: " + city + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your State: " + state + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Last Zip Code: " + zip + "</p>" +
    "</div>" +
    "<div id=\"header\" class=\"form-row\">" +
    "<p>" + "Your Birthday is below: " + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Month: " + month + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Day: " + day + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Year: " + year + "</p>" +
    "</div>" +
    "<div id=\"header\" class=\"form-row\">" +
    "<p>" + "Your Education Level is below: " + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Last Education Level: " + educationlevel + "</p>" +
    "</div>" +
    "<div id=\"header\" class=\"form-row\">" +
    "<p>" + "Your Height: " + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Feet: " + feet + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Last Inches: " + inches + "</p>" +
    "</div>" +
    "<div id=\"header\" class=\"form-row\">" +
    "<p>" + "Your Contact Information is below: " + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row\">" +
    "<p>" + "Your Phone Number: " + phonenumber + "</p>" +
    "</div>" +
    "<div id=\"test\" class=\"form-row end\">" +
    "<p>" + "Your Email: " + email + "</p>" +
    "</div>" +

    "<style>" +
        "#test {" +
            "text-align: center;" +
        "}"+
        "#header {" +
            "text-align: center;" +
            "font-weight: bold;" +
            "font-size: large;" + 
        "}"+
        ".header-area {" +
            "background-color: darkkhaki" + 
        "}"+
        ".container {" +
            "background-color: cornflowerblue;" +
            "margin-top: 5%" +
            "padding-top: 2.5%" +
        "}" +
        
        ".begin {" +
            
            "padding-top: 2.5%" +
        "}" +
        ".end {" +
            
            "padding-bottom: 2.5%" +
        "}" +
        
    "<style>" +
    ""
    );
    res.send(kevin);
    

    
});

app.listen(3000, process.env.IP, function() {
    console.log("The Server Has Started!");
});

