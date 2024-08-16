import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "live server url"
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
