// src/components/DeletePatientButton.js

import React from 'react';
import axios from '../api/axios';

const DeletePatientButton = ({ patientId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/patients/${patientId}`);
      onDelete(patientId);
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeletePatientButton;
