function on_form_sbmt() {
    var amount = document.getElementById("id_amount");
    var full_name = document.getElementById("id_full_name");
    var company_name = document.getElementById("id_company_name");
    var phone_no = document.getElementById("id_phone_no");
    var email = document.getElementById("id_email");

    var textHint = document.getElementById("txtHint");
    
    if (amount.value.length == 0 || parseInt(amount.value)<500 || parseInt(amount.value)>2500) {
        textHint.innerHTML = "<p style='color:red;font-size: 18px;'>Amount must be between 500 - 2500</p>";
        amount.focus();
        amount.required=true;
        amount.setCustomValidity("Please Fill When Do you Need The Funds");
        return false;
    }else{
        textHint.innerHTML = "";
        amount.required=false;
        amount.setCustomValidity("");
    }

    if (full_name.value.length < 2 || !/^[A-Za-z\s]+$/.test(full_name.value)) { 
        textHint.innerHTML = "<p style='color:red;font-size: 18px;'>Please Fill Your Name Properly</p>";
        full_name.focus()
        full_name.required=true;
        full_name.setCustomValidity("Please Fill Your Name Properly");
        return false;
    }else{
        textHint.innerHTML = "";
        full_name.required=false;
        full_name.setCustomValidity("");
    }

    if (company_name.value.length == 0) { 
        textHint.innerHTML = "<p style='color:red;font-size: 18px;'>Please Fill Your Company Name</p>";
        company_name.focus()
        company_name.required=true;
        company_name.setCustomValidity("Please Fill Your Company Name");
        return false;
    }else{
        textHint.innerHTML = "";
        company_name.focus()
        company_name.required=false;
        company_name.setCustomValidity("");
    }

    if (!/^\+?([0]{1})\)?([0-9]{9,10})$/.test(phone_no.value) && !/^\+?([91]{2})\)?([0-9]{9,10})$/.test(phone_no.value) ) { 
        textHint.innerHTML = "<p style='color:red;font-size: 18px;'>Please Fill Your Ph No With +91 Or 0</p>";
        phone_no.focus()
        phone_no.required=true;
        phone_no.setCustomValidity("Please Fill Your Ph No With +91 Or 0");
        return false;
    }else{
        textHint.innerHTML = "";
        phone_no.focus()
           phone_no.required=false;
        phone_no.setCustomValidity("");
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) { 
        textHint.innerHTML = "<p style='color:red;font-size: 18px;'>Please Fill Your Email Id Properly</p>";
        email.focus()
           email.required=true;
        email.setCustomValidity("Please Fill Your Email Id Properly");
        return false;
    }else{
        textHint.innerHTML = "";
        email.focus()
        email.required=true;
        email.setCustomValidity("");
    }

    return true;
}