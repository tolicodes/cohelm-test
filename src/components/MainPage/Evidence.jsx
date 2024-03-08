import React from 'react';
import { Typography, List, ListItem, Box } from '@mui/material';

const Evidence = ({ evidence }) => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Typography variant="h6" gutterBottom component="div">
        Evidence
      </Typography>
      <List>
        {evidence.map((item, index) => (
          <ListItem 
            key={index} 
            sx={{
              backgroundColor: index % 2 ? '#f7f7f7' : '#e7e7e7',
              mb: 0.5,
              borderRadius: '4px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body1">
                <strong>Content:</strong> {item.content}
              </Typography>
              <Typography variant="body2">
                <strong>Page Number:</strong> {item.page_number}
              </Typography>
              <Typography variant="body2">
                <strong>Date/Time:</strong> {item.event_datetime || 'N/A'}
              </Typography>
              {/* Future enhancement: Link or button to highlight section in PDFViewer */}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Evidence;
