import React ,{ useEffect, useState } from 'react'
import GoBack from "./GoBack";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
export default function Map() { 
    const params = useParams();
  console.log(params.coords[0]);
  return (
    <>
    <GoBack />
    <h1>{params.coords[1]}</h1>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </>
  )
}