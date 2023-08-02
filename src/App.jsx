// App.js
import React from 'react';
import Zone from './components/Zone';

const App = ({ zones }) => (
  <div className="p-10 mx-auto max-w-xl"> 
    {zones.map((zone, i) => (
      <Zone key={i} zone={zone} />
    ))}
  </div>
);

export default App;
