<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {

    $name     = $_POST["name"];
    $email    = $_POST["email"];
    $phone    = $_POST["phone"];
    $subject  = $_POST["subject"];
    $message  = $_POST["message"];

    $to = "info@safaplc.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $body = "New Contact Message from Safa PLC Website\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Subject: $subject\n";
    $body .= "Message:\n$message\n";

    if(mail($to, $subject, $body, $headers)) {
        echo "success"; 
    } else {
        echo "error";
    }
}
?>
