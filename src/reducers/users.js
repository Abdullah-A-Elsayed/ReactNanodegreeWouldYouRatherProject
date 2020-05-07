import { RECEIVE_USERS } from "../actions/users";
import { USER_ADDS_NEW_POLL, USER_ANSWERS_POLL } from "../actions/shared";
export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case USER_ANSWERS_POLL:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          answers: {
            ...state[action.author]["answers"],
            [action.poll.id]: action.poll.option,
          },
        },
      };
    case USER_ADDS_NEW_POLL:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author]["questions"].concat([action.poll.id]),
        },
      };
    default:
      return state;
  }
}
