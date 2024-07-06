// src/App.js or src/Main.tsx

import React from 'react';
import AddPatientForm from './components/AddPatientForm';
import PatientList from './components/PatientList';
import EditPatientForm from './components/EditPatientForm';

function App() {
  return (
    <div className="App">
      <h1>ToothFixers Patient Management</h1>
      <AddPatientForm />
      <PatientList />
      {/* Example of editing a patient */}
      {/* <EditPatientForm patient={{ id: 1, name: 'John Doe', age: 30 }} /> */}
    </div>
  );
}

export default App;
