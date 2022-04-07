import axios from "axios";

export const HTTPRequester = (() => {
  const baseURL = "https://dulces-petalos.herokuapp.com";
  const mapQueryString = (queryString) =>
    !queryString
      ? ""
      : Object.entries(queryString).length <= 0
      ? ""
      : `?${Object.entries(queryString)
          .map((key) => `${key[0]}=${key[1]}&`)
          .join("")
          .slice(0, -1)}`;

  const HTTPRequesterAPI = {
    get: (options) => {
      const headers = options.headers;
      return axios.get(`${baseURL}${options.url}${mapQueryString(options.queryString)}`, { headers });
    }
  };
  return HTTPRequesterAPI;
})();
