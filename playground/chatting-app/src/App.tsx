import { Component } from 'react';
import Chatting from './Chatting';
import ErrorBoundary from './ErrorBound';
import UserList from './UserList';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <ErrorBoundary>
        <div>
          참여 사용자 :
          <UserList users={['gdhong', 'mrlee']} />
          <hr />
          <Chatting />
        </div>
      </ErrorBoundary>
    );
  }
}
