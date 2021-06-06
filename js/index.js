let bearer_token =
  'BQAZ_NZyMGkU4lSbPHNhFDHNuEsPhR7AoxiL2ub93f8TasCdpWztcGLf4kPmGD87ed95RDHWn5QxaNo-Hr0aJOFw5ZfpZ0HH_tsEHvbHkxM8OyYd-L4rPeyMS_HSDATjnW_2fFiwA_czbu12nK9sE4CjL4nv5WQGChS05kQNk2JIIGags4Bz9pTvt4ZZH7CgBryxU3JVb89ZZRYyx2uU4e82hL49hD-MgfHZvjQfdsPACx18ovliMPxHrHFIGJgGSmP0esS2C2WKWa3Zj_eWPp452g';

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

                        <div class="audio">
                        <div class="play__button">
                            <audio src="${episode.name}" controls></audio>
                        </div>
                        <p>Preview</p>
                    </div>

                    </div>
                </div>
                `;
        document.getElementById('episodes').innerHTML += episode_html;
      });
    });
}
