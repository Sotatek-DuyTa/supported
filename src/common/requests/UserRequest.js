import BaseRequest from './BaseRequest';

export default class UserRequest extends BaseRequest {

  login (params) {
    const url = "/login";
    return this.post(url, params)
  }

  getUserKyc (params, searchParams) {
    let query = searchParams ? searchParams.inputValueList.name_address : '';
    let kyc_status = searchParams ? searchParams.selectValue : '';

    const url = `/admin/users?q=${query}&kyc_status=${kyc_status}`;
    return this.get(url, params);
  }

  getUserCard (params, searchParams) {
    let query = searchParams ? searchParams.inputValueList.name_address : '';
    let delivered = searchParams ? searchParams.selectValue : '';
  	
    const url = `/admin/cards?q=${query}&delivered=${delivered}`;
  	return this.get(url, params);
  }

  updateCardDelivery(params, id) {
    const url = '/admin/card_delivery/' + id;
    return this.put(url, params);
  }
}
