import { useEffect, useState, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../types/location';

type MapProps = {
  cityLocation: Location;
}

function useMap({cityLocation}: MapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: cityLocation?.latitude,
          lng: cityLocation?.longitude,
        },
        zoom: cityLocation?.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityLocation]);

  return {
    map,
    mapRef
  };
}

export default useMap;
