import React,{useState} from 'react';
import axios from 'axios';

const SignUp = () => {
  const[formData,handleChange]=useState({
    name:"",
    email:"",
    pwd:""

});
const handleChanges =(e)=>
{
 handleChange({...formData,[e.target.name]:e.target.value})
};
const HandleSubmit=async(req,res)=>
{

try{
var req = await axios.post("http://localhost:5602/SignUp",formData);
console.log(res.data);
}catch(err)
{
console.error("error",err);
}
};

  return (
    <div>
      <form onSubmit={HandleSubmit}>
    <div>
      name<input type='text' name='name' value={formData.name} onChange={handleChanges}/>
    </div>
    <div>
      email<input type='email' name='email' value={formData.email} onChange={handleChanges}/>
    </div>
    <div>
      password<input type='password' name='pwd' value={formData.pwd} onChange={handleChanges}/>
    </div>  
    <button type='submit'>signUp</button>
    </form>
    </div>
  );
}

export default SignUp;
