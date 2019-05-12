import BaseRequest from './BaseRequest';

export default class ProductRequest extends BaseRequest {

  get_comments_shop(params) {
    const url = "/get_comments_shop";
    return this.post(url, params);
  }

  users_comments_shop(params) {
    const url = "/users_comments_shop";
    return this.post(url, params);
  }
}
