import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="relative ">
      <Spline
        style={{ width: "100%", height: "100%" }}
        className="scale[.5] md:scale-1"
        scene="https://prod.spline.design/y-U4lRyTFTUjg1Vo/scene.splinecode"
      />
    </div>
  );
}
