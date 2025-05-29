// components/Custom/Map.jsx o .tsx

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -31.5392397,
  lng: -68.590559,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'TU_API_KEY', // Usa env para seguridad
  });

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      options={{ disableDefaultUI: true, clickableIcons: false }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
