/**The UserInfo class is responsible for
 * rendering information about the user on the page.
 * This class should:
 * Take an object with the selectors of two elements into the constructor:
 * one containing the user's name,
 * and another containing the user's job.
 * Store a public method named getUserInfo(),
 * which returns an object with information about the user.
 * This method will be handy for cases when it's necessary to display the user data in the open form.
 * Store a public method named setUserInfo(),
 * which takes new user data and adds it on the page.
 */

export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}
