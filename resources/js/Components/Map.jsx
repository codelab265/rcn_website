import React from "react";
import GoogleMapReact from "google-map-react";

function Map() {
    const location = {
        address: "1600 Amphitheatre Parkway, Mountain View, california.",
        lat: 51.46671,
        lng: -0.10168,
    };

    return (
        <div className="max-w-[809px] w-full h-[527px] bg-black/5 rounded-[30px] overflow-hidden absolute top-0 right-0">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyCzCBF_yNSyFagBI9NS3GotXcozjEs7B-4",
                }}
                defaultCenter={location}
                defaultZoom={17}
            ></GoogleMapReact>
        </div>
    );
}

export default Map;
