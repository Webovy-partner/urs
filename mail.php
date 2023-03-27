

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        $mail_to = "sztefek.jan@seznam.cz";
        
        # Sender Data
        $subject = 'Předmět';
        
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $name = $name . ' ' . str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["surname"])));
        $email = filter_var(trim($_POST["mail"]), FILTER_SANITIZE_EMAIL);
        $sluzby = "\nUživatel má zájem o: \n\n";

        $phone = trim($_POST["phone"]);
        
        if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($subject)) {
            # Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Prosím vyplňte formulář znovu.";
            exit;
        }
        
        # Mail Content
        $content = "Jméno: $name\n";
        $content .= "Email: $email\n\n";
        $content .= "Telefon: $phone\n";
        $content .= "$sluzby\n\n";
        $content .= "Odesláno dne " . date("j.n.Y") .' v ' . date("G:i");

        # email headers.
        $headers = 'From:' . $email . "\n" . 'Reply-to: ' . $email . "\n"  ;

        # Send the email.
        $success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
            # Set a 200 (okay) response code.
            http_response_code(200);
            echo "Děkujeme za Váš zájem, v brzké době Vás naší specialisté budou kontaktovat.";
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Chyba.";
        }

        } else {
            # Not a POST request, set a 403 (forbidden) response code.
            http_response_code(403);
            echo "Někde se stala chyba.";
        }
?>