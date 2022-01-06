import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, input } from '@material-ui/core';

export default function FormDialog3({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,name,company,phone,address,mail}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id='form' id="alert-dialog-title">{id?"Update Client":"Add New Client"}</DialogTitle>
        <DialogContent>
         <div className='te'>
             <TextField id="name" value={name} onChange={e=>onChange(e)} placeholder="Enter Client name" label="Client name" variant="outlined" margin="dense" fullWidth />
             <TextField id="company" value={company} onChange={e=>onChange(e)} placeholder="Enter Company name" label="Company name" variant="outlined" margin="dense" fullWidth />
             <TextField  id="phone" value={phone} onChange={e=>onChange(e)}  placeholder="Enter Phone number" label="Phone Number"variant="outlined" margin="dense" fullWidth />
             <TextField id="address" value={address} onChange={e=>onChange(e)}  placeholder="Enter address" label="Address"variant="outlined" margin="dense" fullWidth />             
             <TextField id="mail" value={mail} onChange={e=>onChange(e)} placeholder="Enter e-mail" label="E-mail" variant="outlined" margin="dense" fullWidth />
             
             
              
         </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}