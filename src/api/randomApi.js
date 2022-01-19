import createRequest from "./request";
export const getRandomUser = (amount) =>
createRequest.get(`api/?results=${amount}`, amount);