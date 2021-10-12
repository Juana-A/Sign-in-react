import { Component } from 'react';
import Card from './containers/Card/Card';
import { Switch, Route, withRouter } from 'react-router';
import ToDoMain from './containers/ToDoMain/ToDoMain';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path="/todo" component={ToDoMain} />
        <Route path="/" exact component={Card} />
      </Switch >
    );
  }
}

export default withRouter(App);
