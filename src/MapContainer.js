import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const MyPopupMarker = ({ children, position }) => (
    <Marker position={position}>
      <Popup>{children}</Popup>
    </Marker>
  )
  
  const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
      <MyPopupMarker key={key} {...props} />
    ))
    return <div style={{ display: 'none' }}>{items}</div>
  }
  
  export default class CustomMapComponent extends Component {
    state = {
      lat: 44.998,
      lng: -93.265,
      zoom: 13,
    }
  
    render() {
      const center = [this.state.lat, this.state.lng]
  
      const markers = [
        { key: 'marker1', position: [44.986, -93.2], children: "lon: "},
        { key: 'marker2', position: [45.0, -93.3], children: 'My second popup' },
        { key: 'marker3', position: [44.9, -93.2], children: 'My third popup' },
      ]
      return (
        <Map center={center} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarkersList markers={markers} />
        </Map>
      )
    }
  }