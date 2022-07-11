import axios from "axios";

const url = "http://localhost:8000";

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (err) {
    console.log("error while calling sign up api -->", err);
  }
};
export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (err) {
    console.log("error while calling login api -->", err);
  }
};

export const payWithPayTM = async (data) => {
  try {
    let response = await axios.post(`${url}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("error while calling paytm api -->", error);
  }
};
