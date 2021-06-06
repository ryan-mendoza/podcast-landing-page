let bearer_token =
  'BQD8etJWvvJBPUggeI4uJEFu92zN0SVDZFZAn1VilPd9p5qNzEdjqikKMdlD33fmelpyzRQm3HEfKvBUEQcDYjG0dx3UokUO-JoBkTxfWNpqZ83hk4tbx5veWEir8Pr-7-oTFJ8kWT8qbVyiBV_Us3yAfmtNNp9v2r-WTYxnbFvlaZopkj059ivtNmGKPnjQsAfB21CM_EHguv2G0uzOtV24em3JvpIvcPyTvs8KzDPuGMywmrckQlFS2MNtqUIdDTF1pLi_bIa2n2ww8r1LJqwmOQ';
let url = 'https://api.spotify.com/v1/shows';
let bearer = 'Bearer ' + bearer_token;

// Featured Section

function fetch_featured() {
  let show_id = '0Giuw6eNbTzP9CDZODDrA2';
  fetch(url + '?ids=' + show_id + '&market=US', {
    method: 'GET',
    headers: {
      Authorization: bearer,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let show = data.shows[0];
      let featured_html = `
            <div class='featured'>
                <img src='${show.images[1].url}' />
                <div>
                    <h2>${show.name}</h2>
                    <h4>${show.description}</h4>
                    <h3>Don't forget to listen to today's episode!</h3>
                    <button>Listen now</button>
                </div>
            </div>
        `;
      document.getElementById('featured').innerHTML = featured_html;
    })
    .catch(console.log);
}

// Latest section

function fetch_latest() {
  let show_ids =
    '27oYFuQyf6VZ18bKP0ffPB%2C0Giuw6eNbTzP9CDZODDrA2%2C2nIvarXvvZcp1cePx69x9N';
  fetch(url + '?ids=' + show_ids + '&market=US', {
    method: 'GET',
    headers: {
      Authorization: bearer,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      data.shows.forEach((show) => {
        let show_html = `
            <div class='show' onClick='location.href = "${show.id}"'>
                <img src='${show.images[1].url}' />
                <div>
                    <h4>${show.name}</h4>
                    <h5>${show.publisher}</h5>
                </div>
            </div>
          `;
        document.getElementById('shows').innerHTML += show_html;
      });
    })
    .catch(console.log);
}

function fetch_all() {
  fetch_featured();
  fetch_latest();
}

function get_show(id) {
  fetch(url + '/' + id + '?market=US', {
    method: 'GET',
    headers: {
      Authorization: bearer,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((data) => {
      return data.json();
    })
    .then(console.log);
}
