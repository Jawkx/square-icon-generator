import React from 'react';
import datas from './datas'

import Icon from './Icon'
function App() {
  const icons = datas.map(item =>
    <Icon
      icon={item.icon}
      name={item.name}
      color={item.color}
    />
  )
  return (
    <div className="App">
      <div className="icons-container">
        {icons}
      </div>
    </div>
  );
}

export default App;
