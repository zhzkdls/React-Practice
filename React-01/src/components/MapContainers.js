/*global kakao*/
import React, { Component } from 'react';
import jsonData from "../db/map_info.json";

class MapContainers extends Component { 
  componentDidMount() {
      var mapContainer = document.getElementById('map'),
      mapOption = { 
          center: new kakao.maps.LatLng(37.505496, 127.005116),
          level: 9
      };
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    for(var i=0 ; i<jsonData.positions.length ; i++){
      var position = jsonData.positions[i]
      var marker = new kakao.maps.Marker({
          map: map,
          position : new kakao.maps.LatLng(position.lat, position.lng), 
      });
    }
  }

  render() {
    return (
      <div id="map" style={{"width":"100%","height":"700px"}}></div>
    )
  }
}
export default MapContainers;