// Split URI Function
function splitURI() {
    var link = document.getElementById("input").value;
    var warning = "Please fill the URI in input area!";
    var parser = document.createElement('a');
    parser.href = link;
    var uri = parser.href;
    var protocol = parser.protocol;
    var domain = parser.hostname;
    var port = parser.port;
    var path = parser.pathname;
    var query = parser.search;
    var fragment = parser.hash;

    if (link == null || link == "") {
        document.getElementById("warning").innerHTML = warning;
    } else {
        document.getElementById("uri").innerHTML = `URI=> ${uri}`;
        document.getElementById("protocol").innerHTML = `Protocol=> ${protocol}`;
        document.getElementById("domain").innerHTML = `Domain=> ${domain}`;
        document.getElementById("port").innerHTML = `Port=> ${port}`;
        document.getElementById("path").innerHTML = `Path=> ${path}`;
        document.getElementById("query").innerHTML = `Query=> ${query}`;
        document.getElementById("fragment").innerHTML = `Fragment=> ${fragment}`;
    }

    descriptionString = "null";
    if (descriptionString != null) {
        document.getElementById('result').style.display = "block";
    } else {
        document.getElementById('result').style.display = "none";
    }
}

//Scroll Button Function
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}