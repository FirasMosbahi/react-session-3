import { ROAD_MAP } from "../constants/road-map";
import RoadMapCard from "./RoadMapCard";

export default function RoadMap() {
  return (
    <div className="grid grid-cols-3 gap-8 my-16 mx-4">
      {ROAD_MAP.map((element, index) => (
        <RoadMapCard
          title={element.title}
          description={element.description}
          image={element.image}
        />
      ))}
    </div>
  );
}
