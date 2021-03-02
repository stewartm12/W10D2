import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Root = ()=> (
  <div>
    <Clock/>
    <Tabs tabsArr={
      [
        {title: "Tab1", content: "Greta"}, 
        {title: "Tab2", content: "Stewart"}, 
        {title: "Tab3", content: "Dane"}
      ]
      }/>
  </div>
)

export default Root;