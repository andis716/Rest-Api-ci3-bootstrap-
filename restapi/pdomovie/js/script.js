
  function searchMovie() {

   $('#movie-list').html(''); // untuk mengosongkan html untuk menampilkan pencarian berikutnya
   // koneksi api menggunakan ajax
  $.ajax({
     url: 'http://omdbapi.com', // masukan alamat url API
     type: 'get', // Method
    dataType: 'json',
    data: {
    'apikey': '6d928cd',
    's': $('#search-input').val()
    },
    success: function (result) {
    if (result.Response == "True") {
    let movies = result.Search;

      $.each(movies, function (i, data) {
      $('#movie-list').append(`
              <div class="card-deck md-4 my-1 mx-1">
                <div class="card">
                  <img src ="` + data.Poster + `" class="card-img-top img-thumbnail" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">` + data.Title + `</h5>
                    <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                    <a href="#" class="card-link detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">Detail</a>
                  </div>
                </div>
              </div>
            `);
      });
      $('#search-input').val('');

        } else {
        $('#movie-list').html(`
            <div class="col">
              <h1 class="text-center">` + result.Error + `</h1>
            </div>
            `)
        }
    }
  });
};



$('#search-button').on('click', function() {
  searchMovie();
});

$('#search-input').on('keyup', function(event) { // event alah parameter dari function
  if (e.keyCode === 13) { // keyCode 13 adalah fungsiaon key keyboard dari javascript
    searchMovie();
  }
});

$('#movie-list').on('click', '.detail', function () { // event bainding dari jquery

  $.ajax({
    url: 'http://omdbapi.com', // masukan alamat url API
    type: 'get', // Method
    dataType: 'json',
    data: {
      'apikey': '6d928cd',
      'i': $(this).data('id')// this adalah tombol detail yang akan di click
    },

    success: function (movie) {
      if (movie.Response === "True") {

        $('.modal-body').html(`
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-4">
                    <img src="`+ movie.Poster + `" class="img-fluid">
                  </div>
                  <div class="col-md-8">
                    <ul class="list-group">
                      <li class="list-group-item"><h3>`+ movie.Title + `</h3></li>
                      <li class="list-group-item">Realeased :`+ movie.Realeased +`</li>
                      <li class="list-group-item">Genre :`+ movie.Genre +`</li>
                      <li class="list-group-item">Director :`+ movie.Director +`</li>
                      <li class="list-group-item">Actor :`+ movie.Actors +`</li>
                      </ul>
                  </div>
                </div>
              </div>
          `);
      }

    }


  });

});
