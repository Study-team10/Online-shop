import axiosMain from "axios";

const url = "http://localhost:3001";

export const withTokenAxios = axiosMain.create({
  baseURL: url,
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});
export const axios = axiosMain.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Origin": "*"
  }
});
