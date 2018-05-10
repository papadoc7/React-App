import React from 'react';
import { Link } from 'react-router-dom';

const PostSingle = ({ post, photo }) => (
    <div className="col s12">
        <div className="col s3">
        </div>
        <div className="col s6">
            <div className="z-depth-3">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={photo.thumbnailUrl} alt="" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h5 className="card-title">{post.title.substring(0, 15)}</h5>
                            <p>{post.body.substring(0, 30)}</p>
                        </div>
                        <div className="card-action">
                            <Link to={`/fullPost/${post.id}`} >Read More </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col s3">
        </div>
    </div>
);

export default PostSingle;