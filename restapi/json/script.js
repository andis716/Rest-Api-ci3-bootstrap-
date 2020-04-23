// let = mahasiswa = {
//   nama : "andi",
//   nrp : "081317987",
//   email : "adaybegins27@gmail.com"
// }
// // merubah object java script menjadi json pada console
// console.log(JSON.stringify(mahasiswa));


// cara ke 2 merubah format json pada file coba.json menjadi 
// object pada java script dan di rampilkan di concole.log
// dengan menggunakan ajax
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if(xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

// cara ke 3 menggunakan jquery
$.getJSON('coba.json', function (data) {
  console.log(data);
});