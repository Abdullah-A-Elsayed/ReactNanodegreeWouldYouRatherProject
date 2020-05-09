import { RECEIVE_POLLS } from "../actions/polls";
import { USER_ADDS_NEW_POLL, USER_ANSWERS_POLL } from "../actions/shared";
export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return action.polls;
    case USER_ANSWERS_POLL:
      return {
        ...state,
        [action.poll.id]: {
          ...state[action.poll.id],
          [action.poll.option]: {
            ...state[action.poll.id][action.poll.option],
            votes: state[action.poll.id][action.poll.option]["votes"].concat([
              action.author,
            ]),
          },
        },
      };
    case USER_ADDS_NEW_POLL:
      return { ...state, [action.poll.id]: action.poll };
    default:
      return state;
  }
}
