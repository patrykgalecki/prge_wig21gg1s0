import React from "react";
import { units } from "./mu.js";
import "./mu.css";

function UnitList() {
  console.log(units);

  return (
    <div>
      {units.mat((unit) => {
        return (
          <div className="unitList_Card" key={unit.id}>
            {unit.name}
          </div>
        );
      })}
    </div>
  );
}

export default UnitList;
