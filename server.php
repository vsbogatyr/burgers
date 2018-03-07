<?php
$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['user-street'];
$house = $_POST['user-house'];
$housing = $_POST['user-house-housing'];
$apartment = $_POST['user-house-apartment'];
$floor = $_POST['user-house-floor'];
$comment = $_POST['comment'];
$trigger = $_POST['trigger'];
$disturb = $_POST['dont-disturb'];
$disturb = isset($disturb) ? 'Нет': 'Да';

$mail_message = '
<html>
<head>
    <meta charset="UTF-8">
    <title> Заявка </title>
</head>
<body>
    <h2>Заказ</h2>
    <ul>
        <li>Имя '.$name.'</li>
        <li>Телефон '.$phone.'</li>
        <li>Улица '.$street.'</li>
        <li>Дом '.$house.'</li>
        <li>Корпус '.$housing.'</li>
        <li>Квартира '.$apartment.'</li>
        <li>Этаж '.$floor.'</li>
        <li>Комментарий '.$comment.'</li>
        <li>Потребуется сдача '.$trigger.'</li>
        <li>Не перезванивать '.$disturb.'</li>
    </ul>
</body>
</html>';

$headers = "From Администратор uamvua@mail.ru>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail ('uamvua@mail.ru', 'Заказ', $mail_message, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}
echo json_encode($data);
?>