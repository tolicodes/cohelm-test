import React from 'react';
import Evidence from './Evidence';
import FinalDecision from './FinalDecision';

const Details = ({ currentStep }) => {
  return (
    <div>
      <div>
        <h2 style={{ color: 'green' }}>Selected Option:</h2>
        <ul>
          {currentStep.options
            .filter(option => option.selected)
            .map(option => (
              <li key={option.key}>
                <input type="checkbox" checked readOnly />
                ({option.key}) {option.text}
              </li>
            ))}
        </ul>
      </div>
      
      <div>
        <h2>All Options:</h2>
        <ul>
          {currentStep.options.map(option => (
            <li key={option.key}>
              <input type="checkbox" checked={option.selected} readOnly />
              ({option.key}) {option.text}
            </li>
          ))}
        </ul>
      </div>
      <Evidence evidence={currentStep.evidence} />
      <FinalDecision step={currentStep} />
    </div>
  );
};

export default Details;
