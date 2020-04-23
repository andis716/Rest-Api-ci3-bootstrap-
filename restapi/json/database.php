<?php

  $database = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '');
  $db = $database->prepare('SELECT * FROM mahasiswa');
  $db->execute();
  $mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

  // mengenerate database dari database php myadmin menjadi format json
  // dengan json_encode
$data = json_encode($mahasiswa);
echo $data;
?>