const initialState = {
  itineraries: [],
  error: null
};

const itineraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITINERARIES_SUCCESS':
      return { ...state, itineraries: action.payload, error: null };
    case 'FETCH_ITINERARIES_ERROR':
      return { ...state, itineraries: [], error: action.payload };
    default:
      return state;
  }
};

export default itineraryReducer;
