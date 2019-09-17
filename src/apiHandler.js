import { ID as _ID, secret } from './apiCredentials';

class ApiHandler {
  ID = _ID;
  key = secret;
  URL = 'https://graphql.anilist.co';

  testKey() {
    console.log("ID:", _ID);
    console.log("secret:", secret);
  }

  testRequest(id = 820) {
    var query = `
    query ($id: Int) {
      Media (id: $id, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
      }
    }
    `;
    var variables = {
      id: id
    }
    var url = this.URL,
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          query: query,
          variables: variables
        })
      };
    return new Promise( resolve => {
      fetch(url, options).then( res => {
        var data = this.handleResponse(res);
        resolve(data);
      })
        .catch(this.handleError);
    });
  }

  handleResponse(res) {
    return res.json().then(json => {
      return res.ok ? json : Promise.reject(json);
    });
  }

  handleData(data) {
    console.log(data);
  }

  handleError(err) {
    console.error(err);
  }

}

export default ApiHandler;