const clientId = '2f2bb6ba35244fe9a343ef9599d9a22f';
const secret = 'd98c6fc719424f669152254632b35bc9';
let accessToken;

const Spotify = {
  getAccessToken() {
    if(accessToken) {
      return new Promise (resolve => resolve(accessToken));
    };
    return fetch(`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=http:%2F%2Flocalhost:3000%2Fcallback&response_type=token`,
    )
    }
  }
}

export default Spotify;
