import React, { Component } from 'react'
import Classes from './Classes'
import Races from './Races'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default () => (
  <Tabs className="character-wizard">
    <TabList className="character-wizard-tabs">
      <Tab>Class</Tab>
      <Tab>Race</Tab>
    </TabList>
    <TabPanel className="character-wizard-details">
      <Classes />
    </TabPanel>
    <TabPanel className="character-wizard-details">
      <Races />
    </TabPanel>
  </Tabs>
)