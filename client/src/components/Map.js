import React ,{ useEffect, useState } from 'react'
import GoBack from "./GoBack";
import "./Map.css";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'



export default function Map() { 
    const params = useParams();
    console.log(params.id);
    let lat=params.id.slice(1,11);
    let long=params.id.slice(12,22);
  return (
    <>
    <GoBack /> 
    <h1>{lat}</h1>
    <h1>{long}</h1>
    <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat,long]}>
    <Popup>
    marker
    </Popup>
  </Marker>
</MapContainer>
    </>
  )
}
