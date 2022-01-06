import React, { useState, useEffect } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, Button } from '@material-ui/core'
import FormDialog from './components/dialog';
import Home from './home';
const initialValue = { name: "", email: "", phone: "", designation: "", doj: "" }

function  Emp () {
  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };
  const url = "http://localhost:1234/users"
  const columnDefs = [ 
    { headerName: "Id", field: "id" },
    { headerName: "Name", field: "name", },
    { headerName: "Email", field: "email", },
    { headerName: "phone", field: "phone" },
    { headerName: "Designation", field: "designation" },
    { headerName: "Date of joining", field: "doj" },
   
    {
      headerName: "Actions", field: "id", cellRendererFramework: (params) => <div>
         <button className="btn btn-warning"style={{marginRight:"5px"}} onClick={() => handleUpdate(params.data)} ><i className="fa fa-edit"></i></button>
        <button className="btn btn-danger"onClick={() => handleDelete(params.value)} ><i className="fa fa-close"></i></button>
      </div>
    }
  ]
 
  
  useEffect(() => {
    getUsers()
  }, [])


  const getUsers = () => {
    fetch(url).then(resp => resp.json()).
    then(resp => setTableData(resp))
  }
  const onChange = (e) => {
    const { value, id } = e.target
        setFormData({ ...formData, [id]: value })
  }
  const onGridReady = (params) => {
    setGridApi(params)
  }

  
  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }

  const handleDelete = (id) => {
   
      fetch(url + `/${id}`, 
      { method: "DELETE" })
      .then(resp => resp.json()).then(resp => getUsers())

    
  }
  const handleFormSubmit = () => {
    if (formData.id) {
      
   
      fetch(url + `/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()

        })
    } else {
      
      fetch(url, {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()
        })
    }
  }

  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: false
  }
  return (
    <div>
<Home/>
<div className="clientlist">
<div className='container'>
          <div className='row'>
           <div className='col-lg-12'> 
            <div className="App">
      <h1 align="center" className='Employee mt-5'>Employee List</h1>
      <Grid align="left" className='mb-3 mr-2 all'>
        <Button variant="contained" color="primary"  onClick={handleClickOpen}> <i class='bx bxs-user-plus'></i>Add Employee</Button>
      </Grid>
      <div className="ag-theme-alpine nn" style={{ height: '400px',width:'1200px'}}>
        <AgGridReact className="mm"
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={ defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
      <FormDialog open={open} 
      handleClose={handleClose}
        data={formData} 
        onChange={onChange} 
        handleFormSubmit={handleFormSubmit} />
    </div>
            
            </div>
             </div>
             
        </div>
    </div>
    </div>
        

    
  );
}

export default  Emp;