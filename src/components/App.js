import React, { Component } from 'react';
import './App.css';
import Posts from './Posts/Posts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import NewPost from './Posts/NewPost';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header-al">
            <h1 className="App-title">
              <a href="/">Posts Page</a>
              <span> | </span>
              <a href="/newpost">Add New Post</a>
              <span> | </span>
              <a href="/about">About</a>
            </h1>
          </header>
          <Switch>
            <Route path="/about" component={About} />

            <Route path="/newpost" render={(props) => (
              <div>
                <NewPost />
              </div>
            )} />

            <Route path="/" component={Posts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
