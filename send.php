<?php

  $email = $_POST['name'];

  $to = '$email';
  $subject = 'test';
  $body = 'this is test';

  mail ($to,$subject,$body);

 ?>
