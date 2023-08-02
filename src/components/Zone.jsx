import Grid from "./Grid";

const Zone = ({ zone }) => (
  <div className="mb-10">
    <h2 className="text-6xl mb-4">{zone.zoneName}</h2>
    <Grid grid={zone.grid} />
  </div>
);

export default Zone
