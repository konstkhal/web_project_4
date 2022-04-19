export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _customFetch = (url, headers) => {
    return fetch(url, headers)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .catch(console.log);
  };

  getInitialCards() {
    /*     console.log(
      this._customFetch(`${this._baseUrl}/cards`, { headers: this._headers })
    ); */
    return this._customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }
  getUserInfo() {
    return this._customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  createCard(data) {
    return this._customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // other methods for working with the API
}
