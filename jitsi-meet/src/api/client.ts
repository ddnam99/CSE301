import axios, { AxiosRequestConfig } from "axios";

export const setToken = async (token = "") => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearToken = async () => {
  axios.defaults.headers.common["Authorization"] = "";
};

const requestAbordCode = "ECONNABORTED";

axios.defaults.baseURL = "";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 5000;

const RequestClient = class {
  async headers(params: any) {
    let keys = Object.keys(params);
    keys.map((key) => {
      axios.defaults.headers.common[key] = params[key];
    });
  }
  async login(endpoint: string, loginData: any) {
    let form = `grant_type=password&username=${loginData.username}&password=${loginData.password}`;
    let response = await fetch(endpoint, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: form,
    });

    return response;
  }
  async upload(endpoint: string, bodyParam: any) {
    try {
      let axiosConfig: AxiosRequestConfig = {
        headers: new Headers({
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "PUT, GET, POST",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        }),
      };
      const response = await axios.post(endpoint, bodyParam, axiosConfig);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  async get(endpoint: string, params = {}) {
    try {
      const response = await axios.get(endpoint, params);

      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(endpoint: string, body: {}, params = {}) {
    try {
      const response = await axios.post(endpoint, body, params);

      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put(endpoint: string, body: {}, params = {}) {
    try {
      const response = await axios.put(endpoint, body, params);
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(endpoint: string, body: any) {
    try {
      const response = await axios.delete(endpoint, { data: body });
      return response;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any) {
    if (error.response && error.response.status === 401) {
      console.log("---LOGOUT---");
      // store.dispatch(logout());
    }
    if (
      error.code === requestAbordCode ||
      ("response" in error && error.response === undefined)
    ) {
      // delay(1000);
      error.recall = true;
    }
    throw error;
  }
};

const client = new RequestClient();

export { client };
