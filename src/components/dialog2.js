import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField, input } from '@material-ui/core';



export default function FormDialog2({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,pname,cname,start,end,eid,ename,tech,status}=data


  return (
    <form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id='form' id="alert-dialog-title">{id?"Update Project":"Add New Project"}</DialogTitle>
        <DialogContent >
         <div className='te'>
             <TextField id="pname" value={pname} onChange={e=>onChange(e)} placeholder="Enter Project name" label="Project name" variant="outlined" margin="dense" fullWidth />
           
             <TextField id="cname" value={cname} onChange={e=>onChange(e)} placeholder="Enter Client name" label="Client name" variant="outlined" margin="dense" fullWidth />
             <TextField type="date" id="start" value={start} onChange={e=>onChange(e)}  variant="outlined" margin="dense" fullWidth />
             <TextField type="date"id="end" value={end} onChange={e=>onChange(e)}  variant="outlined" margin="dense" fullWidth />             
             <TextField id="eid" value={eid} onChange={e=>onChange(e)} placeholder="Enter Employee ID" label="Employee ID" variant="outlined" margin="dense" fullWidth />
             <TextField id="ename" value={ename} onChange={e=>onChange(e)} placeholder="Enter Employee Name" label="Employee Name" variant="outlined" margin="dense" fullWidth />
             <TextField id="tech" value={tech} onChange={e=>onChange(e)} placeholder="Enter Technology" label="Technology" variant="outlined" margin="dense" fullWidth />
             <TextField id="status" value={status} onChange={e=>onChange(e)} placeholder="Status" label="Status" variant="outlined" margin="dense" fullWidth />
           
             
              
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
    </form >
  );
}