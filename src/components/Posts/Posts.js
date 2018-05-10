import React, { Component } from 'react';
import PostSingle from './PostSingle';
import SinglePostDetail from './SinglePostDetail';
import UserDetail from './UserDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.handleShowMore = this.handleShowMore.bind(this)

        this.state = {
            posts: [],
            //comments: [],
            users: [],
            photos: [],
            showPosts: 10,
            showComments: 2
        };
    }

    componentDidMount() {
        const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
        const urlphotos = 'https://jsonplaceholder.typicode.com/photos';
        const urlcomments = 'https://jsonplaceholder.typicode.com/comments';
        const urlusers = 'https://jsonplaceholder.typicode.com/users';

        fetch(urlPosts)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    posts: data
                }),
                    //get last post from localstorage and add to posts table
                    (localStorage.getItem("newPosts") === null ? console.log("no new post") : (this.setState({ posts: data.concat(JSON.parse(localStorage.getItem("newPosts"))) }))),
                    this.state.posts.reverse() //latest first
            })
            .catch((error) => console.log(error));

        fetch(urlphotos)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    photos: data
                }),
                    this.state.photos.reverse(); //latest first
            })
            .catch((error) => console.log(error));

        fetch(urlcomments)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    comments: data
                })
            })
            .catch((error) => console.log(error));

        fetch(urlusers)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    users: data
                })
            })
            .catch((error) => console.log(error));
    }

    handleShowMore() {
        this.setState({
            showPosts:
                this.state.showPosts >= this.state.posts.length ?
                    this.state.showPosts : this.state.showPosts + 10
        })
    }


    renderItems() {
        return this.state.posts.slice(0, this.state.showPosts).map(post => (
            this.state.photos.filter(({ id }) => id === post.id).map(photo => (
                <PostSingle key={post.id} post={post} photo={photo} />
            ))
        ));
    }

    render() {
        var radix = 10; //If the string begins with any other value, the radix is 10 (decimal)
        return (
            <Router>
                <Switch>
                    <Route path={"/fullPost/:postid"}
                        render={(props) => (
                            <div className="row">
                                {
                                    this.state.posts.filter(({ id }) => id === parseInt(props.match.params.postid, radix)).map(post => (
                                        this.state.photos.filter(({ id }) => id === post.id).map(photo => (
                                            <SinglePostDetail key={post.id} postDetail={post} postPhoto={photo} />
                                        ))
                                    ))
                                }
                            </div>

                        )} />
                    <Route path={"/userinfo/:userid"}
                        render={(props) => (
                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.users.filter(({ id }) => id === parseInt(props.match.params.userid, radix)).map(user => (
                                            <UserDetail key={user.id} userDetail={user} />
                                        ))
                                    }
                                </div>
                            </div>
                        )} />
                    <Route path="/" render={(props) => (
                        <div>
                            <div className="row">
                                {this.renderItems()}
                            </div>
                            <div className="row">
                                <p> </p>
                                <button className="waves-effect waves-light btn-small" onClick={this.handleShowMore}>
                                    Load More Posts
                            </button>
                            </div>
                        </div>
                    )} />
                </Switch>
            </Router>
        )
    };
}

export default Posts;
