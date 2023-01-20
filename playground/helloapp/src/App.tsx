import React from 'react';
import { useState } from 'react';
import ContryList from './CountryList';
import styles from './styles';
import TestModule from './App.module.css';
import Footer from './Footer';
import {
  BasicButton,
  ItalicButton,
  UnderLineButton,
  WhiteUnderlineButton,
} from './Buttons';

type Props = {};

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};

const App = (props: Props) => {
  const [theme, setTheme] = useState<string>('basic');
  const [msg, setMsg] = useState<string>('world');
  const [list, setList] = useState<Array<CountryType>>([
    { no: 1, country: '이집트', visited: false },
    { no: 2, country: '일본', visited: true },
    { no: 3, country: '피지', visited: false },
    { no: 4, country: '콜롬비아', visited: false },
  ]);
  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y}
      </div>
    );
  };

  return (
    <div className="container">
      <h2 className={TestModule.test}>Hello {msg}!</h2>
      <hr style={styles.dashStyle} />
      {addResult(4, 3)}
      <ContryList countries={list} />
      <BasicButton>기본</BasicButton>
      <ItalicButton>이탤릭</ItalicButton>
      <UnderLineButton>언더라인</UnderLineButton>
      <WhiteUnderlineButton>화이트 언더라인</WhiteUnderlineButton>
      <Footer theme={theme} />
    </div>
  );
};

export default App;
