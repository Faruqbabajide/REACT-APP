// src/components/PatientList.js

import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import DeletePatientButton from './DeletePatientButton';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleDelete = (patientId) => {
    setPatients(patients.filter((patient) => patient.id !== patientId));
  };

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - Age: {patient.age}
            <DeletePatientButton patientId={patient.id} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
