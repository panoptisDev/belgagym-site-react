import { GooeyCircleLoader } from "react-loaders-kit";
import ReactRotatingText from "react-rotating-text";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 275,
    duration: 3,
    colors: ["#ffffff", "#0097a7", "#0066b7"],
  };
  return (
    <div className="loader">
      <GooeyCircleLoader {...loaderProps} />
      <h5 className="text-white">
        <ReactRotatingText items={["Loading ... "]} />
      </h5>
    </div>
  );
}

export default Loader;
