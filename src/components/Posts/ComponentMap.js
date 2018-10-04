import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const ComponentMap = compose(
    withProps({
        /**
         * Note: create and replace your own key in the Google console.
         * https://console.developers.google.com/apis/dashboard
         * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
         */
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwaNIDTUHj4Bb0VE1i8tIyPcXR1HssswI&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: parseFloat(props.mapGeo.lat), lng: parseFloat(props.mapGeo.lng) }}>
        {props.isMarkerShown && (
            <Marker position={{ lat: parseFloat(props.mapGeo.lat), lng: parseFloat(props.mapGeo.lng) }} />
        )}
        {console.log(props.mapGeo.lat)}
    </GoogleMap>
));

export default ComponentMap;
