import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ConversionForm.css';
import Form from './Form/Form';
import Results from './Results/Results';

function ConversionForm({ USDvalue }) {
  const [formData, setFormData] = useState({});

  const backButton = () => setFormData({});

  if (Object.keys(formData).length === 0) {
    return (<Form submitForm={setFormData} />);
  }
  return (<Results formData={formData} USDvalue={USDvalue} handleBack={backButton} />);
}

ConversionForm.propTypes = {
  USDvalue: PropTypes.number.isRequired,
};

export default ConversionForm;
