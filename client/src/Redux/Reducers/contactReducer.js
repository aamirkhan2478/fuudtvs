import {
  CONTACT_LOADING,
  SEND_CONTACT,
  SHOW_CONTACTS,
  DELETE_CONTACT_MANY,
  SEND_CONTACT_ERROR,
  SHOW_CONTACTS_ERROR,
  DELETE_CONTACT_MANY_ERROR,
} from "../Actions/types";

const initialState = {
  contact_loading: false,
  contact: null,
  show_contacts: [],
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CONTACT_LOADING:
      return {
        ...state,
        contact_loading: true,
      };
    case SEND_CONTACT:
      return {
        ...state,
        contact_loading: false,
        contact: payload,
      };
    case SHOW_CONTACTS:
      return {
        ...state,
        contact_loading: false,
        show_contacts: payload,
      };
    case DELETE_CONTACT_MANY:
      return {
        ...state,
        contact_loading: false,
        show_contacts: state.show_contacts.filter(
          (contact) => contact._id !== payload
        ),
      };
    case SEND_CONTACT_ERROR:
    case SHOW_CONTACTS_ERROR:
    case DELETE_CONTACT_MANY_ERROR:
      return {
        ...state,
        contact_loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
