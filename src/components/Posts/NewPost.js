import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewPostForm from './NewPostForm';

class NewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPosts: [],
            userId: '1',
            id: '',
            title: '',
            body: '',
            responseMess: -1
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

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
        var newArray = this.state.newPosts.slice();
        this.setState({ newPosts: newArray })

        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: this.state.userId,
                title: this.state.title,
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
                    userId: data.userId,
                    id: data.id,
                    title: data.title,
                    body: data.body
                });
                this.setState({ newPosts: newArray })
                console.log(this.state.newPosts);
                // Put the object into storage
                localStorage.setItem('newPosts', JSON.stringify(this.state.newPosts));
            })
            .catch((error) => console.log(error));

        event.preventDefault();

        this.setState({
            id: '',
            title: '',
            body: ''
        });
        <Link to='/' />;
    }

    render() {
        return (
            <div >
                <div className="col s12">
                    <div className="col s2">

                    </div>
                    <div className="col s8">
                        <NewPostForm handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}
                            title={this.state.title}
                            body={this.state.body}
                            sResponse={this.state.responseMess} />
                    </div>
                    <div className="col s2">

                    </div>
                </div>
            </div>
        );
    };
}
export default NewPost;