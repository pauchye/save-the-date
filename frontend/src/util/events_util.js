import axios from 'axios';

export const getEvents = () => {
    // debugger
    return axios.get('/api/events')
}

export const getEvent = eventId => {
    return axios.get(`api/events/${eventId}`)
}

export const updateEvent = (event) => {
    return axios.patch(`api/events/${event.id}`, {
        price: event.price
    });
}