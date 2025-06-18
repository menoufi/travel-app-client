import axios from 'axios';

export const fetchItineraries = (cityName) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/itineraries/${cityName}`);
    dispatch({ type: 'FETCH_ITINERARIES_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_ITINERARIES_ERROR', payload: error.message });
  }
};
