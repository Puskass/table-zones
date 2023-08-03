import React from "react";

const Grid = ({ grid }) => (
  <div className="grid gap-1.5 sm:gap-4 grid-cols-5">
    {grid.map((row, i) => (
      <React.Fragment key={i}>
        {row.map((cell, j) => (
          <div
            className={`w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center border shadow-md rounded-xl hover:animate-bump ${
              cell ? 'font-bold bg-amber-400 hover:bg-amber-500' : 'bg-white'
            }`}
            key={j}
          >
            <span>{cell}</span>
          </div>
        ))}
      </React.Fragment>
    ))}
  </div>
);

export default Grid;
