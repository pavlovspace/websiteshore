$("#sendMail").on("click", function() {
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var country = $("#country").val().trim();
    var people = $("#people").val().trim();
    var date = $("#date").val().trim();
    var message = $("#message").val().trim();

    if(name == ""){
        $("#errorMess").text("Wpisz imię.");
        return false;
    } else if(email == ""){
        $("#errorMess").text("Wpisz email.");
        return false;
    } else if(phone == ""){
        $("#errorMess").text("Wpisz numer telefonu.");
        return false;
    } else if(country == ""){
        $("#errorMess").text("Wybierz kraj.");
        return false;
    } else if(people == ""){
        $("#errorMess").text("Wpisz liczbe osób.");
        return false;
    } else if(date == ""){
        $("#errorMess").text("Wpisz datę.");
        return false;
    } else if(message == ""){
        $("#errorMess").text("Wpisz wiadomość.");
        return false;
    } 

    $("#errorMess").text("")

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'email': email, 'phone': phone, 'country': country, 'people': people, 'date': date, 'message': message, },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
              alert("Przykro nam, pojawił się błąd przy zatwierdzaniu formularza, spróbuj ponownie.");
            else
            $("#mailForm").trigger("reset");
            $("#sendMail").prop("disabled", false);
        }
        
    });

});