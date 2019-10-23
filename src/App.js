import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import AllPosts from './components/AllPosts';
import AddPosts from './components/AddPosts';
import EditPosts from './components/EditPosts';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.getAllPosts = this.getAllPosts.bind(this)
  }
  componentDidMount() {
    this.getAllPosts()
  }
  getAllPosts = () => {
    // console.log('hit')
    axios
      .get('/api/dash')
      .then(res => {
        this.setState({ posts: res.data })
      });
  }
  render() {
    let mappedPosts = this.state.posts.map(post => (
      <div>
        <h1>{posts.title}</h1>
        <p>{post.content}</p>
        <img src={post.image} />
        <link to={`/edit/${post.id}`}>edit</link>
        {/* <button onClick={() => function(post.id)}>delete</button> */}
      </div>)
    return (
      <HashRouter>
        <div className="App">
          {mapped posts}
          <Switch>
            {/* <Route path="/" exact component={AllPosts} />
            <Route path="/add" component={AddPosts} />
            <Route path="/edit/:id" component={EditPosts} /> */}
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;


//switch says only one of these will render. it is like an if stmt. just to setup, and it will go to the pat and check. it is all connected to react-router-dom