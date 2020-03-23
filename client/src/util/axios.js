import axiosMain from "axios";

const url = "http://localhost:3001";

export const withTokenAxios = axiosMain.create({
  baseURL: url,
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});
export const axios = axiosMain.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
});
