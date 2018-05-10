import React from 'react';

const PostSingleDetail = ({ details, photo }) => (

    <div className="col s12">
        <div className="col s2">

        </div>
        <div className="col s8">
            <div className="z-depth-3">
                <div className="card">
                    <div className="card-image">
                        <div className="detail">
                            <img src={photo.url} alt="" />
                        </div>
                    </div>
                    <div className="card-content">
                        <h5 className="card-title">{details.title}</h5>
                        <hr />
                        <p>{details.body}</p>
                    </div>
                    <div className="card-action">
                    </div>
                </div>
            </div>
        </div>
        <div className="col s2">

        </div>
    </div >
);

export default PostSingleDetail;