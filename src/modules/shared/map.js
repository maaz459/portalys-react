import { Wrapper, Status } from "@googlemaps/react-wrapper";
import secret from "../../secrets.json";

function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return <ErrorComponent />;
    case Status.SUCCESS:
      return <MyMapComponent />;
  }
};

const MapComponent = () => <Wrapper apiKey={"YOUR_API_KEY"} render={render} />;
export default MapComponent;
