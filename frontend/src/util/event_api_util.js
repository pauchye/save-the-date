import axios from 'axios';

export const getDinings = () => {
    return axios.get('/api/dinings')
  };

export const getEvents = () => {
    return axios.get('/api/events')
  };
  