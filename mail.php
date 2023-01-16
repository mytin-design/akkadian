<?php
//get data from form  

$clientName = htmlspecialchars($_POST['clientName']);
$clientEmail= htmlspecialchars($_POST['clientEmail']);
$clientPhone = htmlspecialchars($_POST['clientPhone']);
$clientRequest = htmlspecialchars($_POST['clientRequest']);
$to = "denismytin@gmail.com";
$subject = "Akkadian:New Help Request!";
$txt ="Name = ". $clientName . "\r\n  Email = " . $clientEmail . "\r\n  Client Phone = " . $clientPhone . "\r\n Message = " . $clientRequest;
$headers = "From: ".$clientEmail . "\r\n" .
"CC: dmytin@ymail.com";
if($clientEmail!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");

/* Prepare autoresponder subject */
$respond_subject = "Thank you for contacting us!";

/* Prepare autoresponder message */
$respond_message = "Hello! 

Thank you for contacting us! We will get back to you
as soon as possible!

Yours sincerely,

Support Team.
www.akkadian.com
";

/* Send the message using mail() function */
$headers = "From: denismytin@gmail.com";
mail($clientEmail, $respond_subject, $respond_message, $headers);
?>


<?php
function check_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>