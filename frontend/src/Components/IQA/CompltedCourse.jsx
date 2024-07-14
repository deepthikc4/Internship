import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { colors } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  textAlign: 'center',
  color: 'navy',
  fontWeight: 'bold',
  fontSize: '2.5rem',
 
  }; 
const CompltedCourse = ({ open, onClose, course }) => {
  if (!open) return null;

  return (
    <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h4" component="h2">
       { course.courseName}   
   
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       Trainer Name:  {course.trainerName}
      </Typography>
      <Typography>OU: { course.ou}</Typography>
      <Typography>Type of Training: { course.typeOfTraining}</Typography>
      <Typography>Start Date: {new Date(course.startDate).toLocaleDateString()}</Typography>
      <Typography>End Date: {new Date(course.endDate).toLocaleDateString()}</Typography>
      <Typography>Batch Count: { course.batchCount}</Typography>
      <Typography>Final Feedback Score: { course.finalFeedback}</Typography>
     
   
    </Box>
  </Modal>
  );
};

export default CompltedCourse;
