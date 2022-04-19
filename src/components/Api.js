/*
My thoughts and project requirements / recommendations

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-42",
  headers: {
    authorization: this._token,
    "Content-Type": "application/json",
  },
}); */

/*class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    // ...
  }

  // other methods for working with the API
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "cfbd7707-a110-44ae-8aa8-630296f53c66",
    "Content-Type": "application/json"
  }
});

class Api {
  constructor(options) {
    this._token = options.token;
    //"fbd7707-a110-44ae-8aa8-630296f53c66";
    this._group = options.group;
    // "group-12";
    this._base = options.base;
    //"https://around.nomoreparties.co/v1/";
  }

  _buildBaseUrl = () => `${this._base}${this._group}`;

  getInitialCards() {
    // ...
  }

  // other methods for working with the API
}
*/
export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .catch(console.log);

    // .json());
  }

  // other methods for working with the API
}
