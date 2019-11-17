import React, { useState, useEffect } from "react";

import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
  import * as locationData from "./data/locations.json";
  import mapStyles from "./mapStyles";
  function Map() {
    const [selectedLocation, setSelectedLocation] = useState(null);
  
    useEffect(() => {
      const listener = e => {
        if (e.key === "Escape") {
          setSelectedLocation(null);
        }
      };
      window.addEventListener("keydown", listener);
  
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);
  
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 33.771309, lng: -84.392929 }}
      >
        {locationData.locations.map(location => (
          <Marker
            key={location.id}
            position={{
              lat: location.latitude,
              lng: location.longitude
            }}
            onClick={() => {
              setSelectedLocation(location);
            }}
            icon={{
              url: `/home.svg`,
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        ))}
  
        {selectedLocation && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedLocation(null);
            }}
            position={{
              lat: selectedLocation.latitude,
              lng: selectedLocation.longitude
            }}
          >
            <div>
              <h2>{selectedLocation.address}</h2>
              <p>{"Bed: " + selectedLocation.bed + ", Bath: "+ selectedLocation.bath + ", Sqft: " +  selectedLocation.Sqft}</p>
              <p>{"Price: " + selectedLocation.price + "$/Month , Safety Rate: 5" + ", Convince Rate: 5" }</p>
              <p>{"Zillow Link: " + selectedLocation.link}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
  
  const MapWrapped = withScriptjs(withGoogleMap(Map));
  
  export default function MapWrapper(bed, bath) {
    console.log("dada")
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
  