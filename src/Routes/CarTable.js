import React from 'react'
import NavBar from '../components/NavBar'
import { DataGrid } from '@mui/x-data-grid'
import { CarData } from '../components/CarData';

const columns = [
  { field: 'name', headerName: 'Model', width: 300 },
  { field: 'year', headerName: 'Year', width: 150 },
  { field: 'body', headerName: 'Body Type', width: 150 },
  {
    field: 'Cylinder',
    headerName: 'Cylinder',
    width: 90,
  },
 {field:"price", headerName:"Price (€)", width:100  },
 {field:"Color", headerName:"Color", width:100  },
 
];

const rows = CarData;
function CarTable() {
  return (
    <div>
      <NavBar />
      <div className='' style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
    </div>
    
  )
}

export default CarTable