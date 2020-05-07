import { RECEIVE_POLLS } from "../actions/polls";
import { USER_ADDS_NEW_POLL, USER_ANSWERS_POLL } from "../actions/shared";
export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return action.polls;
    case USER_ANSWERS_POLL:
      const { author, poll } = action;
      const { id, option } = poll;
      return {
        ...state,
        [id]: {
          ...state[id],
          [option]: {
            ...state[id][option],
            votes: state[id][option]["votes"].concat[author],
          },
        },
      };
    case USER_ADDS_NEW_POLL:
      const { poll_ } = action;
      return { ...state, [poll_.id]: poll_ };
    default:
      return state;
  }
}
