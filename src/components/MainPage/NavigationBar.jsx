import React from 'react';
import { Button, Box } from '@mui/material';

const NavigationBar = ({ currentStepIndex, setCurrentStepIndex, stepsLength }) => {
  console.log(currentStepIndex)
  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);

    }
  };

  const handleNext = () => {
    if (currentStepIndex < stepsLength - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      console.log({
        currentStepIndex
      })
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Button variant="contained" onClick={handlePrevious} disabled={currentStepIndex === 0}>
        Previous
      </Button>
      <Button variant="contained" onClick={handleNext} disabled={currentStepIndex === stepsLength - 1}>
        Next
      </Button>
    </Box>
  );
};

export default NavigationBar;
