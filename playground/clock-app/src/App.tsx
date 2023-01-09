import { Component } from 'react';
import Clock from './Clock';

type State = {
  formatString: string;
  clockVisible: boolean;
};

export default class App extends Component<{}, State> {
  state = {
    // HH:mm:ss
    // H시 m분 s초
    formatString: 'HH:mm:ss',
    clockVisible: false,
  };

  changeFormat = (format: string) => {
    this.setState({ formatString: format });
  };

  render() {
    return (
      <div className="boxStyle">
        <h2>간단한 디지털 시계</h2>
        <button
          onClick={() =>
            this.setState({ clockVisible: !this.state.clockVisible })
          }
        >
          시계 토글하기
        </button>
        <hr />
        {this.state.clockVisible ? (
          <Clock formatString={this.state.formatString} />
        ) : (
          ''
        )}
      </div>
    );
  }
}
