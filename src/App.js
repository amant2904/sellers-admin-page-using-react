import React, { useState } from 'react';
import './App.css';
import DetailsForm from './components/DetailsForm/DetailsForm';
import AllDetails from './components/DetailsInUI/AllDetails';

function App() {

  const [newEntry, setNewEntry] = useState({
    id: "",
    price: "",
    name: "",
    category: ""
  });

  const liftUpFormValueInApp = (obj) => {
    setNewEntry(obj);
  }

  return (
    <React.Fragment>
      <DetailsForm liftUpValue={liftUpFormValueInApp} />
      <AllDetails latestEntry={newEntry} />
    </React.Fragment>
  );
}

export default App;
