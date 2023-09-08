function fssaiValidation(food_license,errtxt) {
    
    let regex = new RegExp(/^[0-9]{14}$/);
    var x = food_license.value;
    let sptext = errtxt;

    if (regex.test(x)) {
        food_license.style.borderColor = "#878787";
        sptext.textContent = "";
        $(".btnNext").show();
        return true                      
    }
    else {
        $(".btnNext").hide();
        food_license.style.borderColor = "red";
        sptext.style.color = "red";
        sptext.textContent = "food license no. should be 14 digit number";
        return false
    }
};

function shopactValidation(license,errtxt) {
    
    let regex = new RegExp(/^[0-9]{16}$/);
    var x = license.value;
    let sptext = errtxt;
    
    if (regex.test(x)) {
        $(".btnNext").show();
        license.style.borderColor = "#878787";
        sptext.textContent = "";
        return true                  
    }
    else {
        $(".btnNext").hide();
        license.style.borderColor = "red";
        sptext.style.color = "red";
        sptext.textContent = "shopact license no. should be 16 digit number";
        return false 
    }
};
