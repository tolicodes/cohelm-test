import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { green, yellow } from '@mui/material/colors';
import Box from '@mui/material/Box';

import transformSteps from './transformInputData';
import './StepsVisualization.css'

const SUCCESS_GREEN = '#5cb85c';

const StepsVisualization = ({ data }) => {
  const transformedData = transformSteps(data.steps);

  return (
    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', padding: '20px' }}>
      {transformedData.map((step, index) => (
        <Card key={index} sx={{ minWidth: 275, maxWidth: 300, margin: '10px' }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Step {step.key}
            </Typography>
            <Box sx={{ minHeight: '4rem' /* Adjust based on your line-height and font size */ }}>
              <Typography
                component="div"
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3, /* Limit text to 3 lines */
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                {step.question}
              </Typography>
            </Box>
            <Box sx={{ mt: 2, flexWrap: 'wrap', display: 'flex', gap: '10px' }}>
              {step.options.map((option, idx) => (
                <Chip
                  key={idx}
                  label={`(${option.key}) ${option.text}`}
                  sx={{
                    backgroundColor: option.selected ? SUCCESS_GREEN : yellow[100],
                    fontWeight: option.selected ? 'bold' : 'normal',
                    flex: '1 0 auto',
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Stack>

  )
};

export default StepsVisualization;