import produce from 'immer';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'
import App from './App3';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let quiz = {
  students: ['홍길동', '성춘향', '박문수', '변학도'],
  quizlist: [
    {
      question: '한국 프로야구 팀이 아닌것은?',
      options: [
        { no: 1, option: '삼성라이온스' },
        { no: 2, option: '기아타이거스' },
        { no: 3, option: '두산베어스' },
        { no: 4, option: 'LA다져스' },
      ],
      answer: 4,
    },
    {
      question: '2018년 크리스마스는 무슨 요일인가?',
      options: [
        { no: 1, option: '월' },
        { no: 2, option: '화' },
        { no: 3, option: '수' },
        { no: 4, option: '목' },
      ],
      answer: 2,
    },
  ],
};
