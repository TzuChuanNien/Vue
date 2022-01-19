import axios from 'axios';

export default function createRequest() {
  const request = axios.create({
    baseURL: "https://randomuser.me/",
  });


  request.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
         console.log("401")
      }

      return Promise.reject(error);
    }
  );

  return request;
}
