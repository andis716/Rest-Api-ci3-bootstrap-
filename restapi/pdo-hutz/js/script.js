function tampilkanSemuaMenu() {
  $.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>')
      // menggunakan append untuk semua halaman html yang akan di jadikan string
    });
  });
}
tampilkanSemuaMenu();



// membuat pengaturan link active pada menu
$('.nav-link').on('click', function() {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');

// membuat pengaturan agar mengambil elemen HTML h1 untuk di jadikan
// kategori berdasarkan Link pada Navbar
  let kategori = $(this).html();
  $('h1').html(kategori);

  if (kategori == 'All Menu') {
    $('#daftar-menu').html('');
    tampilkanSemuaMenu();
    return;
  }

  $.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;
    let content ='';

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content += '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>';
      }

    });
  });

  // $('#daftar-menu').html(content);

});