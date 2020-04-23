<?php 

$data = file_get_contents('coba.json');
$mahasiswa = json_decode($data, true);

// mengenerate format json pada file coba.json menjadi php sebagai array
echo $data;
// atau gunakan var_dump ($mahasiswa) jika ingin melihat dengan format array
?>