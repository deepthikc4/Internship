import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import CommonFooter from '../Footer/CommonFooter';
import NavbarTraining from './NavbarTraining';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddnewCourse = (props) => {
  const navigate=useNavigate();

const[formdata,setform]=useState(props.data);

  const [errors, setErrors] = useState({
    courseId: '',
    courseName: '',
    batchCount: '',
    startDate: '',
    endDate: '',
    trainerName: '',
    ou: 'Academic', // Default value
    typeOfTraining: 'LTT', // Default value
    status: 'Upcoming' // Default value
  });

  const [err, setErr] = useState({});

  const inputhandler=(e)=>{
setform({...formdata,[e.target.name]:e.target.value});

  }

   const validate = () => {
    let tempErrors = {};
    tempErrors.courseId = formdata.courseId ? "" : alert("courseId field is required.");
    tempErrors.courseName = formdata.courseName ? "" : alert("coursename field is required.");
    tempErrors.batchCount = formdata.batchCount ? "" : alert("batchCount field is required.");
    tempErrors.startDate = formdata.startDate ? "" : alert("start date field is required.");
    tempErrors.endDate = formdata.endDate ? "" : alert("end date is required.");
    tempErrors.trainerName = formdata.trainerName ? "" : alert("trainer name is required.");
    tempErrors.ou = formdata.ou ? "" : alert("OU field is required.");
    tempErrors.typeOfTraining = formdata.typeOfTraining ? "" : alert("Type of training field is required.");
 
    setErr(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };
  const addData=()=>{
if(props.method==='post')
{
    if (validate()) {

      
  console.log("clicked");
  axios.post('http://localhost:3005/api/addnewcourse',formdata)
  .then((res)=>{
  alert(res.data.Message);
  console.log(res.data);
  navigate('/training')

})
.catch((error)=>{
  console.log(error)});
  }}
// update
if(props.method==='put')
  {
  axios.put('http://localhost:3005/api/newcourseupdate/'+formdata._id,formdata).then((res)=>{
  alert(res.data.Message);
  console.log(res.data);
  window.location.reload(false);
 
  })
  .catch((error)=>{
    console.log(error);
  
  })
  
  }

}



  return (
    <>
    <NavbarTraining/>

    <div style={{border:"1px solid blue",padding:"50px",margin:"100px",color:"black",backgroundColor:"whitesmoke",boxShadow:"inset 0 0 10px #000000"}} >

 <Box sx={{ flexGrow: 1 }} style={{padding:"50px"}} >
      <Grid container spacing={2}>
        <Grid item xs={4}>

        <TextField id="outlined-basic" name='courseId'
      value={formdata.courseId}
        onChange={inputhandler}
        fullWidth label="CourseID"   color="primary" variant="outlined" required/>
        </Grid>
        <Grid item xs={4}>
        <TextField id="outlined-basic"name='courseName'
        value={formdata.courseName}
           onChange={inputhandler} fullWidth label="CourseName" variant="outlined" required />
        </Grid>
        <Grid item xs={4}>
        <TextField id="outlined-basic"name='batchCount'
          value={formdata.batchCount}
        type='number'
           onChange={inputhandler} fullWidth label="Batch count" variant="outlined" required />
        </Grid>
       
         <Grid item xs={4}>
        <label   htmlFor="Status">Start Date</label>
        <br></br>
        <TextField name='startDate'
        value={formdata.startDate}
           onChange={inputhandler}fullWidth id="outlined-basic" type='date' variant="outlined" required />
        </Grid>
        <Grid item xs={4}>
        <label htmlFor="Status">End Date</label>
        <br></br>
        <TextField  name='endDate'
         value={formdata.endDate}
           onChange={inputhandler}
           fullWidth id="outlined-basic" type='date' variant="outlined"  required/>
        </Grid> 

        
        <Grid item xs={4}>
        <label htmlFor="Status">Name of the Trainer</label>
        <br></br>
        <TextField fullWidth name='trainerName'
        value={formdata.trainerName}
           onChange={inputhandler}
            id="outlined-basic" label="Name of the Trainer" variant="outlined"  required />
        </Grid>

        <Grid item xs={4}>       
        <label htmlFor="Type of Training">Select OU</label><br></br>
<select name="ou"
   onChange={inputhandler}
   value={formdata.ou}
    id="ou"  required>
    <option value="Academic">Academic</option>
    <option value="Corporate" >Corporate </option>
    <option value="Retail">Retail</option>
    <option value="Government">Government</option>
</select>
        
        </Grid>

        <Grid item xs={4}>
          <label htmlFor="Type of Training">Type of Training</label><br></br>
        <select name="typeOfTraining"
          value={formdata.typeOfTraining}
           onChange={inputhandler}
            id="plan"  required>
    <option value="LTT">LTT</option>
    <option value="MDT" >MDT </option>
    <option value="Microskill">Microskill</option>
   
</select>
      
        </Grid>
        <Grid item xs={4}>       
        <label htmlFor="Status">Status</label><br></br>
<select name='status'
 value={formdata.status}
   onChange={inputhandler}
   id="status"  required>
    <option value="Hold">Hold</option>
    <option value="Ongoing" > Ongoing </option>
    <option value="Completed">Completed</option>
    <option value="Cancelled">Cancelled</option>
    <option value="Upcoming">Upcoming</option>
</select>        
        </Grid>
       
        <Grid item xs={12}>
       <button variant="contained" onClick={addData} style={{border:"1px solid",borderRadius:"20px",fontSize:"22px",marginLeft:"120px",marginTop:'60px',backgroundColor:"Navy",color:"white",width:"550px",padding:"10px"}} >Add Course</button>
        </Grid>
      </Grid>
    </Box>



        
    </div>
    <CommonFooter/>
    </>
  )
}

export default AddnewCourse