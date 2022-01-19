import createRequest from "./request";
const request = createRequest('https://randomuser.me/');
export const getRandomUser = (amount) =>
request.get(`api/?inc=name,email,picture,gender,id,phone&results=${amount}`,amount);