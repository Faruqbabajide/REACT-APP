// src/components/EditPatientForm.js

import React, { useState } from 'react';
import axios from 'axios';

const EditPatientForm = ({ patient }) => {
  const [patientName, setPatientName] = useState(patient.name);
  const [patientAge, setPatientAge] = useState(patient.age);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/patients/${patient.id}`, {
        name: patientName,
        age: patientAge,
      });
      console.log('Patient updated:', response.data);
      // Optionally, you can show a success message or redirect to the patient list
    } catch (error) {
      console.error('Error updating patient:', error);
      // Handle error, show an alert or message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={patientAge}
          onChange={(e) => setPatientAge(e.target.value)}
          required
        />
      </label>
      <button type="submit">Update Patient</button>
    </form>
  );
};

export default EditPatientForm;
