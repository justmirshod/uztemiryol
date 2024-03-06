import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function GeneralMap() {
  return (
    <MapContainer
      center={[41.2910968, 69.2867646]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[41.2910968, 69.2867646]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
