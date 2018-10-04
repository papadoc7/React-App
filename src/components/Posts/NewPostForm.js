import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewPostForm extends Component {

    render() {
        var partial;
        if (this.props.sResponse === 1) {
            partial = <div className="row">
                <div className="col s3">
                </div>
                <div className="col s6">
                    <div className="alert alert-success">
                        <strong>Success!</strong> Your Post is successfully created! <Link to="/" >See all Posts</Link>
                </div>
                    <div className="col s3">
                    </div>
                </div>
            </div>
        }
        else if (this.props.sResponse === 0) {
            partial = <div className="row">
                <div className="col s3">
                </div>
                <div className="col s6">
                    <div className="alert alert-danger">
                        <strong>Error!</strong> an error occurred please try again later!
                </div>
                    <div className="col s3">
                    </div>
                </div>
            </div>
        }
        else
            partial = <div className="row">
                <div className="col s3">
                </div>
                <div className="col s6">
                    <div className="alert alert-info">
                        <strong>Info!</strong> Create your awesome Post!
                </div>
                    <div className="col s3">
                    </div>
                </div>
            </div>

        return (
            <div id="Form" className="col s12">
                <p />

                {partial}

                <form onSubmit={this.props.handleFormSubmit}>
                    <div className="row">
                        <div className="col s2">
                        </div>
                        <div className="col s8">
                            <label htmlFor="title">
                                <h4>Post Title:</h4>
                                <input id="title" className="validate" value={this.props.title}
                                    type="text" name="title"
                                    onChange={this.props.handleInputChange} />
                            </label>
                        </div>
                        <div className="col s2">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s2">
                        </div>
                        <div className="col s8">
                            <label htmlFor="body">
                                <h4>Body:</h4>
                                <input id="body" value={this.props.body}
                                    type="text" name="body"
                                    onChange={this.props.handleInputChange} />
                            </label>
                        </div>
                        <div className="col s2">
                        </div>
                        <div />
                    </div>
                    <div className="row">
                        <div className="col s2">
                        </div>
                        <div className="col s8">
                            <button type="submit" className="btn waves-effect waves-light" value="Submit">Save Post
                            <i className="material-icons right"></i>
                            </button>
                        </div>
                        <div className="col s2">
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewPostForm;
