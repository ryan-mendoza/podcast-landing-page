let bearer_token =
  'BQBt-Zg0E7D-5A7vHumttI5nmNuFuyA1NKU50WzLRQMq7bLCKHIe6Ql2mcxWgqZfA0oA3dDq4koSWV-AqKrbglocUWZCHVBr8rXoZVs0x9L6d_oQuMU4a4D3hxS4ZVV_TIFXxvnPA_puimC5Lw6lqfQ8fqDNuqgxf27iWs-LscKCbC45h5L-iJ2-yURRUFlL3dgoMUtAHNuhNmVI8vT6oMFpK5ND5u_VZPQ_Xpm7j_TCI4qP3R9IE55K-DsIu72k_E-Jv99bau4_C6bBujkFbCAubQ';

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
    '0Giuw6eNbTzP9CDZODDrA2,35WpQaPDB5fhFyVD25Hryu,27oYFuQyf6VZ18bKP0ffPB,6Pz9YOO4XJAL2DRt7RauI3';
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
  fetch(url + '/' + '?id=' + '?market=US', {
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
      let header_html = `
        <img src='${data.images[1].url}' />
        <div>
          <p>PODCAST</p>
          <h2>${data.name}</h2>
          <h5>${data.publisher}</h5>
        </div>
      `;
      document.getElementById('header').innerHTML = header_html;
    });
}

function get_episodes(id) {
  fetch(url + '/' + '?id=' + '?market=US', {
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
      data.items.forEach((episodes) => {
        let episode_html = `
                <div class="episode">
                    <img src='${episode.images[1].url}' />
                    <div class="episode__details">
                        <h2>${episode.name}</h2>
                    </div>
                    <div class="audio">
                    <div class="play__button">
                        <audio src="${episode.name}" controls></audio>
                    </div>
                    <p>Preview</p>

                    </div>
                </div>
                `;
        document.getElementById('episodes').innerHTML += episode_html;
      });
    });
}
