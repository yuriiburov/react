import React, { useState } from 'react';
import Clock from './Clock';

const App = () => (
  <>
    <Clock location="New York" offset={-5} />
    <Clock location="Kyiv" offset={2} />
    <Clock location="London" offset={0} />
  </>
);

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic

export default App;
