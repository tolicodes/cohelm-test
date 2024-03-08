import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FinalDecision = ({ step }) => {
  const theme = useTheme();
  
  if (!step.is_final) {
    return null;
  }

  const isSuccess = step.next_step !== "FAILURE";
  const backgroundColor = isSuccess ? theme.palette.success.light : theme.palette.error.light;

  return (
    <Box sx={{ margin: theme.spacing(2, 0) }}>
      <Paper elevation={3} sx={{ padding: theme.spacing(2), backgroundColor }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Final Decision
        </Typography>
        <Typography variant="body1">
          {step.reasoning}
        </Typography>
      </Paper>
    </Box>
  );
};

export default FinalDecision;
