// eslint-disable no-unused-vars
import React from 'react';
import ComponentMap from './ComponentMap';

const PostSingle = ({ userDetail }) => (
    <div>
        <h2></h2>
        <div className="col-md-7 ">
            <div className="panel panel-default">
                <div className="panel-heading">  <h4 >User Profile</h4></div>
                <div className="panel-body">
                    <div className="box box-info">
                        <div className="box-body">
                            <div className="col-sm-6">
                                <div align="center"> <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive" />
                                    <input id="profile-image-upload" className="hidden" type="file" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h4>{userDetail.username}</h4>
                                <span><p>{userDetail.email}</p></span>
                            </div>
                            <div className="clearfix"></div>
                            <hr />

                            <div className="col-sm-5 col-xs-6 tital " >Name:</div><div className="col-sm-7 col-xs-6 ">{userDetail.name}</div>
                            <div className="clearfix"></div>
                            <div className="col-sm-5 col-xs-6 tital " >Phone:</div><div className="col-sm-7"> {userDetail.phone}</div>
                            <div className="clearfix"></div>
                            <div className="col-sm-5 col-xs-6 tital " >WebSite:</div><div className="col-sm-7"> {userDetail.website}</div>
                            <div className="clearfix"></div>

                            <hr />
                            <div className="col-sm-5 col-xs-6 tital " >Company name:</div><div className="col-sm-7">{userDetail.company.name}</div>
                            <div className="clearfix"></div>


                            <div className="col-sm-5 col-xs-6 tital " >Phrase:</div><div className="col-sm-7">{userDetail.company.catchPhrase}</div>
                            <div className="clearfix"></div>


                            <div className="col-sm-5 col-xs-6 tital " >BS:</div><div className="col-sm-7">{userDetail.company.bs}</div>
                            <div className="clearfix"></div>

                            <hr />
                            <div className="col-sm-5 col-xs-6 tital " >Adress:</div><div className="col-sm-7">{userDetail.address.street}</div>
                            <div className="clearfix"></div>

                            <div className="col-sm-5 col-xs-6 tital " >Suite:</div><div className="col-sm-7">{userDetail.address.suite}</div>
                            <div className="clearfix"></div>

                            <div className="col-sm-5 col-xs-6 tital " >City:</div><div className="col-sm-7">{userDetail.address.city}</div>
                            <div className="clearfix"></div>

                            <div className="col-sm-5 col-xs-6 tital " >Zip Code:</div><div className="col-sm-7">{userDetail.address.zipcode}</div>
                            <div className="clearfix"></div>


                            <div className="col-sm-5 col-xs-6 tital " >Relition:</div><div className="col-sm-7">Hindu</div>


                        </div>

                    </div>


                </div>
            </div>
        </div>
        <ComponentMap isMarkerShown lat={userDetail.address.geo.lat} lng={userDetail.address.geo.lng} center={{ lat: userDetail.address.geo.lat, lng: userDetail.address.geo.lng }} mapGeo={userDetail.address.geo} />
    </div>
);

export default PostSingle;