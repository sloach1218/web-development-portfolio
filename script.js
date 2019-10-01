function mobileNavToggle(){
    currentClass = document.getElementById("mobileNav");
    $('#topNav').on('click', function () {
        if (currentClass.className === "topnav"){
            currentClass.className += " responsive";
        } else {
            currentClass.className = "topnav";
        }
    })
    
};
$(mobileNavToggle());

function mobileNavToggle2(){
    currentClass = document.getElementById("mobileNav");
    $('#mobileNav').on('click', function () {
        if (currentClass.className === "topnav"){
            currentClass.className += " responsive";
        } else {
            currentClass.className = "topnav";
        }
    })
    
};
$(mobileNavToggle2());

