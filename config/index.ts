import axios from "axios";
import Constants from 'expo-constants';

export const apiClient = axios.create({
  baseURL: Constants.expoConfig?.extra?.API_URL || '',
  withCredentials: true
})