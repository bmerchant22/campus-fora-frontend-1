import axios from 'axios';

import { SERVER_ERROR, TOPIC_X_URL, responseBody } from '@callbacks/constants';
import { Answer, Question, Tags, UserDetails } from '@callbacks/types';
import { id } from 'date-fns/locale';

const instance = axios.create({
  baseURL: TOPIC_X_URL,
  timeout: 15000,
  timeoutErrorMessage: SERVER_ERROR
});

export const TopicXLandingRequests = {
  getAll: () =>
    instance
      .get<Question[]>('/landing')
      .then(responseBody)
      .catch((error) => {
        console.log('error in fetching questions for topic X', error);
        return [] as Question[];
      }),

  getLimited: (limit: number) =>
    instance
      .get<Question[]>(`/landing?limit=${limit}`)
      .then(responseBody)
      .catch((error) => {
        console.log('error in fetching questions for topic X', error);
        return [] as Question[];
      }),

  postQuestion: () =>
    instance
      .post('/question')
      .then(responseBody)
      .catch((error) => {
        console.log('error in posting the question', error);
      }),
  
  getQuestionById: (id: number) =>
    instance
      .get<Question>('/question:'+id)
      .then(responseBody)
      .catch((error) => {
        console.log('error in fetching the question with id : '+ id, error);
        return {} as Question;
      }),

  getAllQuestions: () =>
    instance
      .get<Question[]>('/question')
      .then(responseBody)
      .catch((error) => {
        console.log('error in fetching questions', error);
        return [] as Question[];
      }),

  getLimitedQuestions: (limit: number) =>
    instance
      .get<Question[]>(`/question?limit=${limit}`)
      .then(responseBody)
      .catch((error) => {
        console.log('error in fetching questions', error);
        return [] as Question[];
      }),

  deleteQuestionById: (id: number) =>
    instance
      .delete<Question>('/question:'+id)
      .then(responseBody)
      .catch((error) => {
        console.log('error in deleting the question with id : '+ id, error);
      }),

  updateQuestionById: (id: number) =>
    instance
      .put<Question>('/question:'+id)
      .then(responseBody)
      .catch((error) => {
        console.log('error in updating the question with id : '+ id, error);
      }),

  createNewAnswer: () =>
    instance
      .post<Answer>('/answer')
      .then(responseBody)
      .catch((error) => {
        console.log('error in answering the question', error);
      }),

  getAllAnswersForThread: () =>
    instance
      .get<Answer[]>('/answer')
      .then(responseBody)
      .catch((error) => {
        console.log('error in getting the answers', error);
        return [] as Answer[];
      }),

  getLimitedAnswersForThread: (limit: number) =>
    instance
      .get<Answer[]>(`/answer?limit=${limit}`)
      .then(responseBody)
      .catch((error) => {
        console.log('error in fetching posts', error);
        return [] as Answer[];
      }),

  getAnswerById: (id: number) =>
    instance
      .get<Answer>('/answer:'+id)
      .then(responseBody)
      .catch((error) => {
        console.log('error in getting the post with id: '+id, error);
        return {} as Answer;
      }),

  updateAnswerById: (id: number) =>
    instance
      .put<Answer>('/answer:'+id)
      .then(responseBody)
      .catch((error) => {
        console.log('error in updating post with id : '+id, error);
      }),

  deleteAnswerById: (id: number) =>
    instance
      .delete<Answer>('/answer:'+id)
      .then(responseBody)
      .catch((error) => {
        console.log('error in deleting post with id : '+id, error);
      }),
  
  createNewComment: (id: number) =>
    instance
      .post<Comment>('/comment/:'+id)
      .then(responseBody)
      .catch((error) => {
        console.log('error in creating a comment in the question', error);
      }),

  getAllCommentsForAnswer: () =>
    instance
      .get<Comment[]>('/comment')
      .then(responseBody)
      .catch((error) => {
        console.log('error in getting the comments', error);
        return [] as Comment[];
      }),

  updateCommentById: (id: number) =>
    instance
      .put<Comment>('/comment/:'+id)
      .then(responseBody)
      .catch((error) => {
        console.log('error in updating comment with id : '+id, error);
      }),

  deleteCommentById: (id: number) =>
    instance
      .delete<Comment>('/comment/:'+id)
      .then(responseBody)
      .catch((error) => {
        console.log('error in deleting comment with id : '+id, error);
      }),
     
  updateTagsForQuestion: (id: number) =>
    instance
      .put<Tags>('/question/:'+id+'/tags')
      .then(responseBody)
      .catch((error) => {
        console.log('error in updating tags for question and id : '+id, error);
      }),    
};