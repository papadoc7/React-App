import React, { Component } from 'react';

class NewComment extends Component {

    render() {
        var partial;
        if (this.props.sResponse === 1) {
            partial = <div className="row">
                <div className="col s3">
                </div>
                <div className="col s6">
                    <div className="alert alert-success">
                        <strong>Success!</strong> Your comment is successfully added!
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
            partial = <div></div>

        return (
            <div id="Form" className="col s12">
                <hr />
                {partial}
                <h4>Add your Comment</h4>
                <form onSubmit={this.props.handleFormSubmit}>
                    <div className="row">
                        <div className="col s3">
                        </div>
                        <div className="col s6">
                            <label htmlFor="name">
                                <h4>Name:</h4>
                                <input id="name" className="validate" value={this.props.name}
                                    type="text" name="name"
                                    onChange={this.props.handleInputChange} />
                            </label>
                            <span> </span>
                            <label htmlFor="email">
                                <h4>Email:</h4>
                                <input id="email" className="validate" value={this.props.email}
                                    type="email" name="email"
                                    onChange={this.props.handleInputChange} />
                            </label>
                        </div>
                        <div className="col s3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s3">
                        </div>
                        <div className="col s6">
                            <label htmlFor="body">
                                <h4>Body:</h4>
                                <input id="body" value={this.props.body}
                                    type="text" name="body"
                                    onChange={this.props.handleInputChange} />
                            </label>
                        </div>
                        <div className="col s3">
                        </div>
                        <div />
                    </div>
                    <div className="row">
                        <div className="col s2">
                        </div>
                        <div className="col s8">
                            <button type="submit" className="btn waves-effect waves-light" value="Submit">Add comment
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

export default NewComment;