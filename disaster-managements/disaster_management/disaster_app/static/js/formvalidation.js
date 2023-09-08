function phoneNumberValidation(contact_no,errtxt) {

    let regex = new RegExp(/^\+?[0-9]{0,3}[0-9]{6,15}$|^[0-9]{10}$/);
    let x=contact_no.value;
    let sptext = errtxt;

    if (regex.test(x)) {
         
         contact_no.style.borderColor = "#878787";
         sptext.textContent = "";
       
         $(".btnNext").show();
         document.getElementById('submitbutton').disabled = false;
         return true                      
    }
    else {
        
        $(".btnNext").hide();
        document.getElementById('submitbutton').disabled = true;
      
        contact_no.style.borderColor = "red";
        sptext.style.color = "red";
        sptext.textContent = "Indian Mobile Number can be entered with or without Countrycode.But International number must have country code.";
        return false
        
    }
}

function landLineValidation(contact_no,errtxt) {

    let regex = new RegExp(/(?=^[\d]{11}$)\(?(0\d{2,3})\)?[- ]?(\d{6,8})$/);
    let x=contact_no.value;
    let sptext = errtxt;

    if (regex.test(x)) {
         
         contact_no.style.borderColor = "#878787";
         sptext.textContent = "";
         $(".btnNext").show();
         document.getElementById('submitbutton').disabled = false;
         return true                      
    }
    else {

        $(".btnNext").hide();
        document.getElementById('submitbutton').disabled = true;
        contact_no.style.borderColor = "red";
        sptext.style.color = "red";
        sptext.textContent = "Landline Number must be 11 digits with area code(eg:02223456789)";
        return false
        
    }
}

function faxNumberValidation(contact_no,errtxt) {

    let regex = new RegExp(/^\+?[0-9]{7,}$/);
    let x=contact_no.value;
    let sptext = errtxt;

    if (regex.test(x)) {
         
         contact_no.style.borderColor = "#878787";
         sptext.textContent = "";
         $(".btnNext").show();
         document.getElementById('submitbutton').disabled = false;
         return true                      
    }
    else {
        $(".btnNext").hide();
        document.getElementById('submitbutton').disabled = true;
        contact_no.style.borderColor = "red";
        sptext.style.color = "red";
        sptext.textContent = "Fax number should be numeric and atleast 7 digits";
        return false
        
    }
}


function urlValidation(url,errtxt) {

    let regex = new RegExp(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/);
    let x=url.value;
    let sptext = errtxt;

    if (regex.test(x)) {
         
         url.style.borderColor = "#878787";
         sptext.textContent = "";
         $(".btnNext").show();
        document.getElementById('submitbutton').disabled = false;
         return true                      
    }
    else {
        $(".btnNext").hide();
        // document.getElementById('submitbutton').disabled = true;
        url.style.borderColor = "red";
        sptext.style.color = "red";
        sptext.textContent = "Enter Valid Url";
        return false
        
    }
}


function aadharValidation(aadhar,errortext) {
                
    var regexp = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = aadhar.value;
    if (regexp.test(x)) {
        // window.alert("Valid Aadhar no.");
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        aadhar.style.borderColor = "#878787";
        return true

    }
    else {
        //  window.alert("Invalid Aadhar no.");
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Enter Valid aadhar number, Accept only 12 digit ."
        aadhar.style.borderColor = "red";
        return false
    }
}
            
function gstinValidation(gstin_no,errtxt) {
    
    let regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    let x = gstin_no.value;
    // let submitbtn = document.getElementById('submitbutton')
    let sptext = errtxt;
    
    if (x == null) {
        return "false";
    }

    if (regex.test(x)) {
        $(".btnNext").show();
        // window.alert("Valid Aadhar no.");
        // submitbtn.disabled = false;
        sptext.textContent = "";
        gstin_no.style.borderColor = "#878787";
        return true

    }
    else {
        //  window.alert("Invalid Aadhar no.");
        $(".btnNext").hide();
        // submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "gstin no. must be in format 06BZAHM6385P6Z2";
        gstin_no.style.borderColor = "red";
        return false
    }
}

function vatValidation(vat_no,errtxt) {
    
    let regex = /^IN[0-9]{13}Z[0-9A-Z]{1}$/;
    let x = vat_no.value;
    // let submitbtn = document.getElementById('submitbutton')
    let sptext = errtxt;
    
    if (x == null) {
        return "false";
    }

    if (regex.test(x)) {
        $(".btnNext").show();
        // window.alert("Valid Aadhar no.");
        submitbtn.disabled = false;
        sptext.textContent = "";
        vat_no.style.borderColor = "#878787";
        return true

    }
    else {
        //  window.alert("Invalid Aadhar no.");
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Vat no. must be in format IN1234567890123Z1";
        vat_no.style.borderColor = "red";
        return false
    }
}

function tdsValidation(tds_no,errtxt) {
    
    let regex = /^[A-Z]{4}[0-9]{5}[A-Z]{1}$/;
    let x = tds_no.value;
    // let submitbtn = document.getElementById('submitbutton')
    let sptext = errtxt;
    
    if (x == null) {
        return "false";
    }

    if (regex.test(x)) {
        $(".btnNext").show();
        // window.alert("Valid Aadhar no.");
        submitbtn.disabled = false;
        sptext.textContent = "";
        tds_no.style.borderColor = "#878787";
        return true

    }
    else {
        //  window.alert("Invalid Aadhar no.");
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "TDS must be in format BLRW39567H";
        tds_no.style.borderColor = "red";
        return false
    }
}

function panValidation(pan,errortext) {
                
    var regexp = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = pan.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        // window.alert("Valid Aadhar no.");
        submitbtn.disabled = false;
        sptext.textContent = "";
        pan.style.borderColor = "#878787";
        return true

    }
    else {
        //  window.alert("Invalid Aadhar no.");
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Must be in like 'ABCDE1234F'"
        pan.style.borderColor = "red";
        return false
    }
}
            
function textValidation(text,errortext) {
    var regex = /^[a-zA-Z][a-zA-Z ]{1,200}$/    
    // var regexp = /^[a-zA-Z0-9][a-zA-Z ]+$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = text.value;
    if (regex.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        text.style.borderColor = "#878787";
        return true

    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Only alphabets allowed."
        text.style.borderColor = "red";
        return false
    }

    
}

function middleNameValidation(text,errortext) {
    var regex = /^[a-zA-Z]+$/;    
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = text.value;
    if (regex.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        text.style.borderColor = "#878787";
        return true

    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Only alphabets allowed."
        text.style.borderColor = "red";
        return false
    }

    
}

function branchCodeValidation(text,errortext) {
    var regex = /^([a-zA-Z]){1,4}$/    
    // var regexp = /^[a-zA-Z0-9][a-zA-Z ]+$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = text.value;
    if (regex.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        text.style.borderColor = "#878787";
        return true

    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Field must contain upto four alphabets"
        text.style.borderColor = "red";
        return false
    }

    
}
  

function birthdateValidation(birth_date,errortext) {           
    var regexp = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = birth_date.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        birth_date.style.borderColor = "#878787";
        return true

    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Format must be mm/dd/yyyy"
        birth_date.style.borderColor = "red";
        return false
    }
}

// /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

function emailValidation(email,errortext) {
                
    var regexp = /^[a-zA-Z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = email.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        email.style.borderColor = "#878787";
        return true

    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Enter a valid Email"
        email.style.borderColor = "red";
        return false
    }
}

// [\w',-\\/.\s]

function addressValidation(address,errortext) {
                
    // var regexp = /^[A-Za-z0-9-#.,()\/]{3,50}[A-Za-z0-9-#.,()\/\s]{3,50}*$/;
    var regexp = /^[A-Za-z0-9-#.,()\/]{2,25}[\s]{0,1}[A-Za-z0-9-#.,()\/\s]{0,100}$/;
    let sptext = errortext
    let submitbtn = document.getElementById('submitbutton');
    var x = address.value;
    if (regexp.test(x) && x!=="") {

        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        address.style.borderColor = "#878787";
        return true

    }
    else {

        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Enter a valid Input"
        address.style.borderColor = "red";
        return false
    }
}

function shopandbrandValidation(name,errortext) {
    // var regexp = /^(?![0-9]*$)[a-zA-Z0-9]+$/; 
    var regexp = /^[a-zA-Z0-9]{3,10}[a-zA-Z0-9 ]*$/;
    let sptext = errortext
    let submitbtn = document.getElementById('submitbutton');
    var x = name.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        name.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Enter a valid name"
        name.style.borderColor = "red";
        return false
    }
}

function priceValidation(price,errortext) {
                
    var regexp = /^[1-9]\d*(\.\d+)?$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = price.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        price.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Only integers/decimals are allowed"
        price.style.borderColor = "red";
        return false
    }
}

function AccountNOValidation(account_no,errortext) {
                
    var regexp = /^[0-9]{9,18}$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = account_no.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        account_no.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Account no. should be Only Numeric and min 9 and max 18 in size"
        account_no.style.borderColor = "red";
        return false
    }
}


function FullNameValidation(full_name,errortext) {
                
    var regexp = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{1,}\s{1}[a-zA-Z]{1,})$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = full_name.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        full_name.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Name cannot contain numbers and special characters"
        full_name.style.borderColor = "red";
        return false
    }
}
// For Not empty field accepting all but not empty string.
function notEmpty(string,errortext) {
                
    var regexp = /(?!^ +$)^.+$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = string.value;
    if (regexp.test(x)) {
        
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        string.style.borderColor = "#878787";
        return true
    }
    else {
        
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "This Field is required."
        string.style.borderColor = "red";
        return false
    }
}

function timeValidation(clock,errortext) {
                
    var regexp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = clock.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        clock.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Field should be in time format(HH:MM)."
        clock.style.borderColor = "red";
        return false
    }
}

// ^[1-9][\.\d]*(,\d+)?$

function decimalValidation(num,errortext) {
                
    var regexp = /^[1-9][\.\d]*(\d+)*$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = num.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        num.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Numbers are allowed and should not start with '0'"
        num.style.borderColor = "red";
        return false
    }
}

function ifscValidation(ifsc,errortext) {
                
    var regexp = /^[A-Z]{4}[A-Z0-9]{7}$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = ifsc.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        ifsc.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Enter Valid IFSC Code(Eg.SBIN0000123/BARB0SUNGOR)."
        ifsc.style.borderColor = "red";
        return false
    }
}


// ^[0-9]{6,6}$

function pinCodeValidation(pincode,errortext) {
                
    var regexp = /^[0-9]{6,6}$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = pincode.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        pincode.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Pincode must be of fromat 412345."
        pincode.style.borderColor = "red";
        return false
    }
}

function billNoValidation(billno,errortext) {
                
    var regexp = /^[0-9]$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = billno.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        billno.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Enter Valid Bill Number."
        billno.style.borderColor = "red";
        return false
    }
}

function alphanumericValidation(alphanum,errortext) {
    var regexp = /^[a-zA-Z0-9]{3,25}[a-zA-Z0-9 ]{0,25}$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = alphanum.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        alphanum.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Only Alphanumeric and Min 3 characters."
        alphanum.style.borderColor = "red";
        return false
    }
}

function OnlyNumericValidation(num,errortext) {
    var regexp = /^[0-9]+$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = num.value;
    if (regexp.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        num.style.borderColor = "#878787";
        return true
    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Only Numeric Input allowed."
        num.style.borderColor = "red";
        return false
    }
}

function textValidation1(text,errortext) {
    var regex = /^[a-zA-Z][a-zA-Z ]{3,10}$/    
    // var regexp = /^[a-zA-Z0-9][a-zA-Z ]+$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = text.value;
    if (regex.test(x)) {
        $(".save").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        text.style.borderColor = "#878787";
        return true

    }
    else {
        $(".save").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Only alphabets and single space with min. 3 and max 10 alphabets allowed."
        text.style.borderColor = "red";
        return false
    }

    
}

function SwiftcodeValidation(text,errortext) {
    var regex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/   
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = text.value;
    if (regex.test(x)) {
        $(".save").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        text.style.borderColor = "#878787";
        return true

    }
    else {
        $(".save").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Enter Valid Input(Eg: CTBAAU2S or CTBAAU2S33D)"  
        text.style.borderColor = "red";
        return false
    }

    
}

function descValidation(text,errortext) {
    var regex = /^([a-zA-Z0-9]){1,50}$/    
    // var regexp = /^[a-zA-Z0-9][a-zA-Z ]+$/;
    let sptext = errortext
           let submitbtn = document.getElementById('submitbutton');
    var x = text.value;
    if (regex.test(x)) {
        $(".btnNext").show();
        submitbtn.disabled = false;
        sptext.textContent = "";
        text.style.borderColor = "#878787";
        return true

    }
    else {
        $(".btnNext").hide();
        submitbtn.disabled = true;
        sptext.style.color = "red";
        sptext.textContent = "Field must contain upto 50 alphanumeric characters"
        text.style.borderColor = "red";
        return false
    }

}
