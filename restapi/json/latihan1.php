<?php 
$mahasiswa = [
  [
  "nama" => "andi",
  "nrp" => "081317987",
  "email" => "adaybegins27@gmail.com"
  ],
  [
    "nama" => "sanjaya",
    "nrp" => "081317987",
    "email" => "adaybegins27@gmail.com"
  ],
];
// merubah asosiative array pada php menjadi json dengan json_encode
$data = json_encode($mahasiswa);
echo $data;
?>