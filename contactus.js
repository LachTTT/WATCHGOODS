function validate(){
    var fullname = document.getElementById("fullname").value
    var email =document.getElementById("email").value
    var country =document.getElementById("country")
    var message =document.getElementById("message").value
    var agree =document.getElementById("agree")
    var e=document.getElementById("country")
    var ddl=document.getElementById("country")

    
    if(fullname.length <  5 ){
        alert("Fullname Must Be > 5")
    }
    else if(email.endsWith("@gmail.com") == false){
        alert("Email must be gmail")
    }
    else if(ddl.value==""){
        alert("you must pick your country");

    }

    else if(message.length < 10 ){
        alert("Message Must Be > 10")
    }

    else if(!agree.checked){
        alert("Must Agree")
    }
    else{
        alert("Form Submitted")
        // document.contactusform.submit();
        document.contactusform.reset();
    }
}