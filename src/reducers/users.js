import { RECEIVE_USERS } from "../actions/users";
import { USER_ADDS_NEW_POLL, USER_ANSWERS_POLL } from "../actions/shared";
export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case USER_ANSWERS_POLL:
      const { author, poll } = action;
      const { id, option } = poll;
      return {
        ...state,
        [author]: {
          ...state[author],
          answers: {
            ...state[author]["answers"],
            [id]: option,
          },
        },
      };
    case USER_ADDS_NEW_POLL:
      const { author_, poll_ } = action;
      return {
        ...state,
        [author_]: {
          ...state[author_],
          questions: state[author_]["questions"].concat([poll_.id]),
        },
      };
    default:
      return state;
  }
}
