import React from 'react';
import Zone from './components/Zone';

const App = ({ zones }) => (
  <div className="mx-auto max-w-sm sm:max-w-lg"> 
    {zones.map((zone, i) => (
      <Zone key={i} zone={zone} />
    ))}
  </div>
);

export default App;
