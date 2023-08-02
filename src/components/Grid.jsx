// Grid.js
import React from 'react';

const Grid = ({ grid }) => (
  <table className="border-collapse border border-gray-500">
    <tbody>
      {grid.map((row, i) => (
        <tr key={i}>
          {row.map((cell, j) => (
            <td
              key={j}
              className={`px-4 py-2 border border-gray-500 w-20 h-20 ${
                cell === null
                  ? 'bg-white shadow hover:animate-ping hover:bg-slate-200 cursor-pointer'
                  : cell !== ''
                  ? 'bg-yellow-300 hover:bg-yellow-400'
                  : 'hover:bg-gray-200'
              }`}
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
