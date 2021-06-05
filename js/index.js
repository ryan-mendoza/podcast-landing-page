let bearer_token =
  'BQCooCGw87O2eakZUoFmyV4K_k2dWTifR0MSpjrV2gal2mqGo1Pto1PMmJwSh5MmsJuYBkSaL7YUbcRJxMrP425gZJKrNmlRJ_LvKJSDFNOyLWWqm7';
let url = 'https://api.spotify.com/v1/shows';
let bearer = 'Bearer ' + bearer_token;

function fetch_featured() {
  let show_id = '2nIvarXvvZcp1cePx69x9N';
  fetch(url + '?ids=' + show_id + '?market=US', {
    method: 'GET',
    headers: {
      Authorization: bearer,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
