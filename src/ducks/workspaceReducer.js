const initialState = {
  loading: false,
  customer: {},
  initialLoad: true,
  creating: false
};

// Action Types
const SHOW_CREATE_CUSTOMER = "SHOW_CREATE_CUSTOMER";
const CREATE_CUSTOMER = "CREATE_CUSTOMER";
const GET_CUSTOMER = "GET_CUSTOMER";

// Reducer
export default function workspaceReducer( state = initialState, action ) {
  switch( action.type ) {
    case SHOW_CREATE_CUSTOMER:
      return Object.assign({}, state, { creating: true });

    case CREATE_CUSTOMER + "_FULFILLED":
      return {
        loading: false,
        initialLoad: true,
        creating: false,
        customer: {}
      }

    case GET_CUSTOMER + "_PENDING":
      return {
        loading: true,
        initialLoad: false,
        creating: false,
        customer: {}
      }

    case GET_CUSTOMER + "_FULFILLED":
      return Object.assign({}, state, { loading: false, customer: action.payload });

    // Update Customer - Fulfilled

    // Delete Customer - Fulfilled

    default: return state;
  }
}

// Action Creators
export function showCreateCustomer() {
  return {
    type: SHOW_CREATE_CUSTOMER,
    payload: null
  }
}

export function createCustomer( promise ) {
  return {
    type: CREATE_CUSTOMER,
    payload: promise
  }
}

export function getCustomer( promise ) {
  return {
    type: GET_CUSTOMER,
    payload: promise
  }
}