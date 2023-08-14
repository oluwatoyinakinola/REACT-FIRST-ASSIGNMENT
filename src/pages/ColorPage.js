import React, { useState } from 'react';

function ColorPage() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor }}>
      <h2>Color Page</h2>
      <button onClick={() => changeBackgroundColor('red')}>Red</button>
      <button onClick={() => changeBackgroundColor('green')}>Green</button>
      <button onClick={() => changeBackgroundColor('blue')}>Blue</button>
      <button onClick={() => changeBackgroundColor('yellow')}>Yellow</button>
      <button onClick={() => changeBackgroundColor('purple')}>Purple</button>
    </div>
  );
}

export default ColorPage;
