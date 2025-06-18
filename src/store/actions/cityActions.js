import axios from 'axios';

export const fetchCities = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/cities/all');;
    dispatch({
      type: 'FETCH_CITIES_SUCCESS',
      payload: res.data,
    });
  } catch (err) {
    console.error('Error fetching cities:', err);
    dispatch({
      type: 'FETCH_CITIES_ERROR',
      payload: err.message,
    });
  }
};




