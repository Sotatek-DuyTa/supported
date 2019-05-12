import BaseRequest from './BaseRequest';

export default class ProductRequest extends BaseRequest {

  get_shop_detail(params) {
    const url = "/get_shop_detail";
    return this.post(url, params);
  }
}
