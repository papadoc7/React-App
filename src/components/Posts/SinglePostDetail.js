import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SinglePostComments from './SinglePostComments';
import NewComment from './NewComment';

class SinglePostDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            user: [],
            showComments: 5,
            postId: this.props.postDetail.id,
            id: '',
            name: '',
            email: '',
            body: '',
            responseMess: -1
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    componentDidMount() {
        const urlcomments = 'https://jsonplaceholder.typicode.com/comments?postId=' + this.props.postDetail.id;
        const urluser = 'https://jsonplaceholder.typicode.com/users/' + this.props.postDetail.userId;

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

        fetch(urluser)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    user: data
                })
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.comments.slice(this.state.comments.length - this.state.showComments, this.state.comments.length).map(comment => (
            <SinglePostComments key={comment.id} comment={comment} />
        ));
    }

    handleInputChange(event) {
        this.setState({ responseMess: -1 })

        let input = event.target;
        let name = event.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit(event) {
        //You should treat the state object as immutable,
        //however you need to re-create the array so its pointing to a new object, set the new item, then reset the state
        var newArray = this.state.comments.slice();

        this.setState({ comments: newArray })

        fetch('https://jsonplaceholder.typicode.com/comments/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postId: this.props.postDetail.id,
                name: this.state.name,
                email: this.state.email,
                body: this.state.body
            })
        })
            .then((response) => {
                if (response.ok) {
                    this.setState({ responseMess: 1 })
                    return response.json();
                }
                else {
                    this.setState({ responseMess: 0 })
                }
            })
            .then((data) => {
                newArray.push({
                    postId: data.postId,
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    body: data.body
                });
                this.setState({ comments: newArray })
            })
            .catch((error) => console.log(error));

        event.preventDefault();

        this.setState({
            postId: '',
            id: '',
            name: '',
            email: '',
            body: ''
        });
    }

    render() {
        return (

            <div >
                <div className="col s12">
                    <div className="col s2">

                    </div>
                    <div className="col s8">
                        <div className="z-depth-3">
                            <div className="card">
                                <div className="card-image">
                                    <div className="detail">
                                        <img src={this.props.postPhoto.url} alt="" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h5 className="card-title">
                                        {this.props.postDetail.title}
                                    </h5>
                                    <p>
                                        <span className="glyphicon glyphicon-user" aria-hidden="true">
                                        </span>&nbsp;by&nbsp;
                                        <Link to={`/UserInfo/${this.state.user.id}`} >{this.state.user.name} </Link>
                                    </p>
                                    <hr />
                                    <p>{this.props.postDetail.body}</p>
                                </div>
                                <div className="card-action">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s2">

                    </div>
                </div>
                <p>-</p>
                {this.renderItems()}

                <NewComment handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    name={this.state.username}
                    email={this.state.email}
                    body={this.state.body}
                    sResponse={this.state.responseMess} />
            </div>
        );
    };
}
export default SinglePostDetail;