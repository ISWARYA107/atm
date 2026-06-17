import axios from "axios";

const API = "http://localhost:5001/api/atm";

export const signup = (data) => {
  return axios.post(`${API}/signup`, data);
};

export const login = (accountNumber, pin) => {
  return axios.post(`${API}/login`, {
    accountNumber,
    pin,
  });
};

export const getBalance = (accountNumber) => {
  return axios.get(`${API}/balance/${accountNumber}`);
};

export const deposit = (accountNumber, amount) => {
  return axios.put(`${API}/deposit`, {
    accountNumber,
    amount,
  });
};

export const withdraw = (accountNumber, amount) => {
  return axios.put(`${API}/withdraw`, {
    accountNumber,
    amount,
  });
};