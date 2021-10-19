import React from 'react'

import TimezonePicker from 'timezone-picker'
import 'timezone-picker/dist/index.css'


//Components
import Modal from "./components/ModalBox";
import Header from "./components/Header";

// Data
import userData from "./user.json";
import data from "./geojson/countries_110m.json";

const App = () => {
  const [open, setOpen] = React.useState(false);

  return <div>
    <Header onMapClick={(val: boolean)=> setOpen(val || !open)}/>
    <div className="body">
      <h1 className="center">User Role Tabel</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Role</th>
          <th>Description</th>
          <th>Create Time</th>
        </thead>
        <tbody>
          {userData.map((obj) => <tr>
              <td>{obj.name}</td>
              <td>{obj.role}</td>
              <td>{obj.description}</td>
              <td>{obj.createDate}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
    <Modal show={open} onClose={()=> setOpen(false)}><TimezonePicker data={data} /></Modal>
  </div>
}

export default App
