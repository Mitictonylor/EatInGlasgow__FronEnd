import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";



export const icon = new Icon({
  iconUrl: "/images/Logo.jpg",
  iconSize: [35, 35]
});

export default function UserRestaurantMap({restaurantList}){
const [activeRestaurant, setActiveRestaurant] = React.useState(null);


if(restaurantList.length <=0){
  return <h2>Loading</h2>
}








  return (
    <Map center={[55.860916, -4.251433]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {restaurantList.map(restaurant => (
        <Marker
          key={restaurant.id}
          position={[
          restaurant.latitude,
          restaurant.longitude
          ]}
          onClick={() => {
            setActiveRestaurant(restaurant);
          }}
          icon={icon}
        />
      ))}

      {activeRestaurant && (
        <Popup
          position={[
            activeRestaurant.latitude,
            activeRestaurant.longitude
          ]}
          onClose={() => {
            setActiveRestaurant(null);
          }}
        >
          <div>
            <h2>{activeRestaurant.name}</h2>
            <p>Cousine: {activeRestaurant.cousine}</p>
            <p>Opening Time: {activeRestaurant.openingTime}-{activeRestaurant.closingTime}</p>
            <button onClick="">Book</button>
          </div>
        </Popup>
      )}
    </Map>
  );
}
