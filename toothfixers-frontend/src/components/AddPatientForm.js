// src/components/AddPatientForm.js

import React, { useState } from 'react';
import axios from '../api/axios';

const AddPatientForm = () => {
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/patients', {
        name: patientName,
        age: patientAge,
      });
      console.log('Patient added:', response.data);
      setPatientName('');
      setPatientAge('');
    } catch (error) {
      console.error('Error adding patient:', error);
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
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatientForm;
