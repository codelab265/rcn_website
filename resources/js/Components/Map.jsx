import React from "react";
import GoogleMapReact from "google-map-react";

function Map() {
    const location = {
        address: "1600 Amphitheatre Parkway, Mountain View, california.",
        lat: 37.42216,
        lng: -122.08427,
    };

    return (
        <div className="max-w-[809px] w-full h-[527px] bg-black/5 rounded-[30px] overflow-hidden absolute top-0 right-0">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyBDrEKsKkMuBMwUEGFjj4UVLMr5-2gsbls",
                }}
                defaultCenter={location}
                defaultZoom={17}
            ></GoogleMapReact>
        </div>
    );
}

export default Map;
