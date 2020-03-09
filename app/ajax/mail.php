<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $country = $_POST['country'];
    $people = $_POST['people'];
    $date = $_POST['date'];
    $message = $_POST['message'];

    $subject = "=?utf-8?B?".base64_encode("Wiadomość TRAVEL SHORE"). "?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("pavlov1space@gmail.com", $subject, $message, $headers);
    echo $success;
?>