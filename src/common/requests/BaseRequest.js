export default class BaseRequest {
  getUrlPrefix () {
    return `${API_URL}`;
  }

  async get (url, params = {}, cancelToken) {
    try {
      const config = {
        params,
        cancelToken: cancelToken ? cancelToken.token : undefined,
      };
      const response = await window.axios.get(this.getUrlPrefix('GET') + url, config);
      return response.data;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async put (url, data = {}) {
    try {
      const response = await window.axios.put(this.getUrlPrefix() + url, data);
      return response.data;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async post (url, data = {}) {
    try {
      const response = await window.axios.post(this.getUrlPrefix() + url, data);
      return response.data;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async del (url, data = {}) {
    try {
      const response = await window.axios.delete(this.getUrlPrefix() + url, { data });
      return response.data;
    } catch (error) {
      this._errorHandler(error);
    }
  }

  _errorHandler (err) {
    // window.app.$broadcast('EVENT_COMMON_ERROR', err);
    if (err.response && err.response.status === 401) { // Unauthorized (session timeout)
      // window.app.$modal.show('warning-login-dialog');
      window.AuthManage.unAuthorization();
      if (window.app.$router) {
        window.app.$router.push({path: '/login'});
      }
    }
    if (err.response && err.response.status === 503) { // maintenance
      window.location.reload();
    }
    throw err;
  }

}
