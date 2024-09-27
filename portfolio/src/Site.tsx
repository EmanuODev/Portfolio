import React, { useState } from 'react';
import { LightMode } from './pageLightMode';
import { DarkMode } from './pageDarkMode';

function App() {
  const [pageMode, setPageMode] = useState(true);

  return (
    <div>
      {pageMode ? (
        <LightMode setPageMode={setPageMode} />
      ) : (
        <DarkMode setPageMode={setPageMode} />
      )}
    </div>
  );
}

export default App;
