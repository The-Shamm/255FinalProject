import { useState } from 'react'
import ServiceTeamTable from './components/table'
import InputForm from './components/InputForm'
import Image from './components/profileImage'
//import Profile from './components/Profile'
//import VariantButtonGroup from './components/buttonGroup'



function App() {
  const [formData, setFormData] = useState([]);

  const handleSubmit = (formDataItem) => {
    setFormData(prevData => [...prevData, formDataItem]);
  };

  return (
    <div className="app-container">
    <div><h3><Image></Image></h3></div>
<div>
<h1>***Creator  notes for future feature releases***</h1>
<p>Here are some examples of links to other pages</p>
<ul><p></p></ul>
<nav>
  <ul>
    <li>
      <a href="./profile">Profile page test</a><br></br>
      <a href="profile">Phonebook page</a>
    </li>
  </ul>
</nav>
</div>


      {/*<VariantButtonGroup buttonOne="Worker 1" buttonTwo="Worker 2" buttonThree="Worker 3" />*/}
           <InputForm onSubmit={handleSubmit} />
      <ServiceTeamTable data={formData} />
   


 </div>
)



}



export default App
