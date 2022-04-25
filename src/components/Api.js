export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _customFetch = async (url, headers) => {
    try {
      const res = await fetch(url, headers);
      return await (res.ok ? res.json() : Promise.reject(res.statusText));
    } catch (message) {
      return console.log(message);
    }
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

  /*  getAvatarLink() {
    return this._customFetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
    });
  } */

  setAvatarLink(data) {
    return this._customFetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data.name),
    });
  }

  setUserInfo(data) {
    console.log(data);
    return this._customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  createCard(data) {
    return this._customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId) {
    return this._customFetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }
  likeCard(cardId) {
    return this._customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: "PUT",
    });
  }

  disLikeCard(cardId) {
    return this._customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  // other methods for working with the API
}
