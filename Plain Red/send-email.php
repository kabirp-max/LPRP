<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the email from POST request
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Email details
    $subject = "Thank You for Contacting Us!";
    $message = "Hello,\n\nThank you for reaching out to us. We will get back to you shortly.\n\nBest Regards,\nTechIntelPro Team";
    $headers = "From: no-reply@techintelpro.com\r\n";
    $headers .= "Reply-To: no-reply@techintelpro.com\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($email, $subject, $message, $headers)) {
        echo "Thank you! Your email has been sent successfully.";
    } else {
        echo "Failed to send email. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
