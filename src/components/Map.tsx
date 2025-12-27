import { useEffect, useRef, Ref } from 'react';
import mapboxgl from 'mapbox-gl'

const MapBox = () => {
  const mapContainerRef = useRef<HTMLDivElement | string>('');
  const mapRef = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN


    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.5, 40],
      zoom: 9,
    });
  });


  return (
    <div
      style={{ height: '100%' }}
      ref={mapContainerRef as Ref<HTMLDivElement>}
      className="map-container"
    />
  )
}


export default MapBox
