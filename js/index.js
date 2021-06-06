let bearer_token =
  'BQAxYZJZFsqA0Vb5QO149yzoKPBJD-qWqr0m1-3bSsWuXg3j-N4-ihjuBWiEH34vFHIjpHbbyuLg_kka9iUZys9GxK61mlHuUiyYwBs_B_-xeU3Ay6mtR5R2S-MWAKrRV7X9tJaiHUxUI-tni_DanFavZtJtqtuWRa_uj5bcxINymZZe5zoGKFVxFtbfPuAU19bGthWImMqdSr1gyPwDIFo08yEPYC48lKVOxkepZm-3hh2n00HlL8X-ROXJhkQnX4Vtkz-obPSuU7NFsQqbKjzleg';
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
            <div class='show' onClick='location.href = "${show.external_urls.spotify}"'>
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
