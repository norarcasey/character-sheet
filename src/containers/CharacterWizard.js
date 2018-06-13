import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Classes from './Classes';
import Races from './Races';
import SetAbilityScores from './SetAbilityScores';

export default () => (
  <Tabs className="character-wizard">
    <TabList className="character-wizard-tabs">
      <Tab>Class</Tab>
      <Tab>Race</Tab>
      <Tab>Points</Tab>
    </TabList>
    <TabPanel className="character-wizard-details">
      <Classes />
    </TabPanel>
    <TabPanel className="character-wizard-details">
      <Races />
    </TabPanel>
    <TabPanel>
      <SetAbilityScores />
    </TabPanel>
  </Tabs>
);
