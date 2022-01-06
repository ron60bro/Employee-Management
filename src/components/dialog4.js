import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, input } from '@material-ui/core';

export default function FormDialog4({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,email,password}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
         <div className='te'>
             <TextField id="email" value={email} onChange={e=>onChange(e)} placeholder="Enter E-mail"  margin="dense" fullWidth />
             <TextField id="password" value={password} onChange={e=>onChange(e)} placeholder="Enter Password"  margin="dense" fullWidth />
           
             
             
              
         </div>
        </DialogContent>
        <DialogActions>
         
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}