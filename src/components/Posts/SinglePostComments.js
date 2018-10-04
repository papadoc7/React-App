import React from 'react';

const SinglePostComments = ({ comment }) => (


    <div className="col s12">
        <div className="col s3">
        </div>
        <div className="col s6">
            <div className="col s12">
                <div className="col s2">
                    <div className="thumbnail">
                        <img className="img-responsive user-photo" alt="" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    </div>
                </div>
                <div className="col s10">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <strong>{comment.name}</strong> <span className="text-muted"></span>
                        </div>
                        <div className="panel-body">
                            {comment.body}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col s3">
        </div>
    </div>

);

export default SinglePostComments;
