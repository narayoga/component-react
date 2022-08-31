import React, { useState,useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

function App() {
  const [data,setData] = useState([])
  let count = 1
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res =>{
            console.log(res)
            setData(res.data)
         })
         .catch(err => {
          console.log(err)
         })
  }

  useEffect(()=>{
    getData()

    $(document).ready(function () {
      setTimeout(function(){
        $('#example').DataTable(
            {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              dom: 'Bfrtip',
              buttons: ['copy', 'csv', 'print']
            }
        );
      },1000);
    });
  }, [])

  return (
    <div className="MainDiv">
      <h3>Therichpost.com</h3>
      <div className="container p-5"> 
        <table id="example" className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((result) => {
              return (
                <tr key={result.id}>
                  <td>{count++}</td>
                  <td>{result.name}</td>
                  <td>{result.email}</td>
                  <td>{result.company.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
