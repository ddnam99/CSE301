import axios from "axios";

export const callAPI = (
  endpoint: string,
  method: any = "GET",
  data: any = {}
) => {
  return axios({
    method,
    url: `http://localhost:4000${endpoint}`,
    data,
  });
};
