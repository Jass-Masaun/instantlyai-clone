import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/utils/constants/common';

const checkStatus = (status) => status >= 200 && status < 300;

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    platform: 'web',
    'x-frame-options': 'SAMEORIGIN',
  },
  validateStatus: checkStatus,
  timeout: 20000,
});

axiosClient.interceptors.request.use(
  (config) => {
    let accessToken = `bearer ${window.localStorage.getItem(ACCESS_TOKEN_KEY)}`;

    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export const getData = async (endpoint) => {
  try {
    const response = await axiosClient.get(endpoint);
    // if (response.status === 403) {
    //   await postData('/logout', {});
    //   window.localStorage.clear();
    //   window.location.href === '/login';
    // }
    return response;
  } catch (error) {
    // if (error?.response?.status == 401) {
    //   window.localStorage.clear();
    //   window.location.href === '/login';
    // }
    return error.response;
  }
};

export const postData = async (endpoint, payload) => {
  try {
    const response = await axiosClient.post(endpoint, payload);
    // if (response.status === 403) {
    //   await postData('/logout', {});
    //   window.localStorage.clear();
    //   window.location.href === '/login';
    // }
    return response;
  } catch (error) {
    // if (error?.response?.status == 401) {
    //   window.localStorage.clear();
    //   window.location.href === '/login';
    // }
    return error.response;
  }
};

export const patchData = async (endpoint, payload) => {
  try {
    const response = await axiosClient.patch(endpoint, payload);
    // if (response.status === 403) {
    //   await postData('/logout', {});
    //   window.localStorage.clear();
    //   window.location.href === '/login';
    // }
    return response;
  } catch (error) {
    // if (error?.response?.status == 401) {
    //   window.localStorage.clear();
    //   window.location.href === '/login';
    // }
    return error.response;
  }
};

export const putData = async (endpoint, payload) => {
  try {
    const response = await axiosClient.put(endpoint, payload);
    // if (response.status === 403) {
    //   await postData('/logout', {});
    //   window.localStorage.clear();
    //   window.location.href === '/login';
    // }
    return response;
  } catch (error) {
    // if (error?.response?.status == 401) {
    //   window.localStorage.clear();
    //   window.location.href === '/login';
  }
  return error.response;
};

export const deleteData = async (endpoint, payload) => {
  try {
    const response = await axiosClient.delete(endpoint, {
      data: payload,
    });
    // if (response.status === 403) {
    //   await postData('/logout', {});
    //   window.localStorage.clear();
    //   window.location.href === '/login';
    // }
    return response;
  } catch (error) {
    // if (error?.response?.status == 401) {
    //   window.localStorage.clear();
    //   window.location.href === '/login';
    // }
    return error.response;
  }
};
