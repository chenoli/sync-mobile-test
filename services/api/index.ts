import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dev.api.syncremote.co/api/v1/admin/users',
});
