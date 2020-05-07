import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "./_DATA";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, polls]) => ({
    users,
    polls,
  }));
};
export const saveQuestion = ({ author, optionOneText, optionTwoText }) => {
  return _saveQuestion({ author, optionOneText, optionTwoText }); //question object
};
export const saveQuestionAnswer = ({ authedUser, qid, answer }) => {
  //answer: optionOne or optionTwo
  return _saveQuestionAnswer({ authedUser, qid, answer });
};
