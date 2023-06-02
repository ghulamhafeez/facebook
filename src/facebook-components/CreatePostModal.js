import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CreatePostModal = () => {
  return (
    <Modal
    keepMounted
    // open={open}
    // onClose={handleClose}
    aria-labelledby="keep-mounted-modal-title"
    aria-describedby="keep-mounted-modal-description"
  >
    <Box>
      <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  </Modal>
  )
}

