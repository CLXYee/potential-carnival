'use client';

import 'leaflet/dist/leaflet.css';
import { DivIcon, LatLngBoundsExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useEffect } from 'react';

const exploredPlaces = [
  { name: 'Singapore', coordinates: [1.3521, 103.8198] as [number, number] },
  { name: 'Malaysia', coordinates: [3.139, 101.6869] as [number, number] },
  { name: 'Thailand', coordinates: [13.7563, 100.5018] as [number, number] },
  { name: 'Hong Kong', coordinates: [22.3193, 114.1694] as [number, number] },
  { name: 'Beijing', coordinates: [39.9042, 116.4074] as [number, number] },
  { name: 'Shanghai', coordinates: [31.2304, 121.4737] as [number, number] },
  { name: 'Suzhou', coordinates: [31.2989, 120.5853] as [number, number] },
  { name: 'Hangzhou', coordinates: [30.2741, 120.1551] as [number, number] },
  { name: 'Xinjiang', coordinates: [43.793, 87.6271] as [number, number] },
  { name: 'Harbin', coordinates: [45.8038, 126.5349] as [number, number] },
  { name: 'Paris', coordinates: [48.8566, 2.3522] as [number, number] },
  { name: 'Dijon', coordinates: [47.322, 5.0415] as [number, number] },
  { name: 'Besançon', coordinates: [47.2378, 6.0241] as [number, number] },
  { name: 'Ho Chi Minh City', coordinates: [10.8231, 106.6297] as [number, number] },
  { name: 'Phu Quoc', coordinates: [10.2899, 103.984] as [number, number] },
  { name: 'Hanoi', coordinates: [21.0278, 105.8342] as [number, number] },
];

const mapBounds: LatLngBoundsExpression = [[0, 0], [52, 130]];

const watercolorMarker = new DivIcon({
  className: 'watercolor-marker',
  html: '<span></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
  popupAnchor: [0, -10],
});

function MapResizeHandler() {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();
    const refreshMap = () => {
      map.invalidateSize({ animate: false });
      map.fitBounds(mapBounds, { animate: false, padding: [12, 12] });
    };
    const observer = new ResizeObserver(refreshMap);

    observer.observe(container);
    refreshMap();

    return () => observer.disconnect();
  }, [map]);

  return null;
}

export default function TravelMap() {
  return (
    <div className="travel-map" aria-label="Interactive map of places Xin Yee has explored">
      <MapContainer
        bounds={mapBounds}
        minZoom={2}
        maxZoom={12}
        scrollWheelZoom={false}
        worldCopyJump
        className="travel-map-canvas"
      >
        <MapResizeHandler />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {exploredPlaces.map((place) => (
          <Marker key={place.name} position={place.coordinates} icon={watercolorMarker}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
