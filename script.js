function switchMode() {
    let moon = document.getElementById ("moon");
    if(moon.className=="moon"){
    moon.className="sun";
    document.body.style.backgroundColor = "#141D26";
    document.body.style.color = "white";
    }
    else {
    moon.className ="moon";
    document.body.style.backgroundColor = "#f4e4b8";
    document.body.style.color = "black";
    }
    }
    