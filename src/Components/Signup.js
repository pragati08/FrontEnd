import React from 'react';
import {Avatar, Button, Grid,RadioGroup,TextField, Typography, FormLabel} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';



import axios from 'axios';
     var avatarStyle={backgroundColor:'black', margin:25};
     const btnStyle={margin:'8px 0'};
     const headerStyle={margin:0};
    
    
     
const initialState ={
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        password:'',
        role:'',
        vehicleNumber:'',
        location:'',
        activityStatus:'',
     nameError:"",
     emailError:"",
     passwordError:""  ,
     phoneError:"" 
}

class Signup extends React.Component{
 state=initialState;

    constructor()
    {
        super()
        this.state={
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        password:'',
        confirmpassword:'',
        clickedYes: false,
        role:'',
        vehicleNumber:'',
        location:'',
        activityStatus:'',
       nameError:"",
       emailError:"",
       passwordError:"",
       phoneError:""
        
    }
        this.changefirstName=this.changefirstName.bind(this);
        this.changelastName=this.changelastName.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changePhone=this.changePhone.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.changeConfirmPassword=this.changeConfirmPassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.yesHandler = this.yesHandler.bind(this);
        this.changeRole=this.changeRole.bind(this);
        this.changeVehicleNumber=this.changeVehicleNumber.bind(this);
        this.changeLocation=this.changeLocation.bind(this);
        this.changeActivityStatus=this.changeActivityStatus.bind(this);
        this.changeGender=this.changeGender.bind(this);

    }

    

    changefirstName(event)
    {
        this.setState({
        firstname: event.target.value
        })

    }
    changelastName(event)
    {
        this.setState({
        lastname: event.target.value
        })

    }
    changeEmail(event)
    {
        this.setState({
        email: event.target.value
        })
        
    }
    changePhone(event)
    {
        this.setState({
        phone: event.target.value
        })
    }
    changePassword(event)
    {
        this.setState({
        password: event.target.value
        })
    }
    changeConfirmPassword(event)
    {
        this.setState({
        confirmpassword: event.target.value
        })
    }
    yesHandler() {
        this.setState({
          clickedYes: !this.state.clickedYes
        });
      }

    changeRole(event){
        this.setState({
        selectedOption: event.target.value
        })
    }
    changeVehicleNumber(event){
        this.setState({
            vehicleNumber:event.target.value
        })
    }
    changeLocation(event){
        this.setState({
            location:event.target.value
        })
    }
    changeActivityStatus(event){
        this.setState({
            activityStatus:event.target.value
        })
    }
    changeGender(event){
        this.setState({
            gender: event.target.value

        })
    }
  
    validate=()=>{
        let firstNameError="";
        let lastNameError="";
       let emailError="";
        let passwordError="";
        let phoneError="";

        if((this.state.firstname.length<5 || this.state.firstname.length>20) ){
            firstNameError=" Name should be greater than 5 and less than 20";
        }
        if((this.state.lastname.length<5 || this.state.lastname.length>20) ){
            lastNameError=" Name should be greater than 5 and less than 20";
        }
        if((this.state.phone.length<10) || (this.state.phone.length>10)){
            phoneError=" 10 number required";
        }
        if((this.state.password.length<5 || this.state.password.length>20) ){
            passwordError=" password should be greater than 8";
        }

        if((!this.state.email.includes('@')) || (!this.state.email.includes('.'))){
            emailError="invalid Email";
        }
        if(emailError || firstNameError || lastNameError ||passwordError || phoneError){
            this.setState({emailError, firstNameError, lastNameError, passwordError, phoneError})
            return false;
        }
        return true;

    }


onSubmit(event)
{
    event.preventDefault();
    const isValid= this.validate();
    if(!isValid){
        
    }
    if(isValid){
        console.log(this.state)
        this.setState(initialState);
    }
    const registered =
    {
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        email:this.state.email,
        phone:this.state.phone,
        password:this.state.password,
        role:this.state.selectedOption,
        vehicleNumber:this.state.vehicleNumber,
        location:this.state.location,
        activityStatus:this.state.activityStatus,
        gender:this.state.gender,
        birthDate:this.state.birthDate


    }
    axios.post('http://localhost:5900/users/register',registered)
    .then(res=>console.log(res.data))
    
    this.setState({
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        password:'',
        confirmpassword:'',
        selectedOption:'',
        vehicleNumber:'',
        location:'',
        activityStatus:''  ,
        gender:" "
    })
}

    render()
    {
        const {errors} = this.state;

        const radioYes = this.state.clickedYes ? <div>
        <TextField label='vehicleNumber' type="number" placeholder="Enter Vehicle Number" fullWidth required
        onChange={this.changeVehicleNumber} value={this.state.vehicleNumber}/>
        <TextField label='Location' placeholder="Enter Location" fullWidth required
        onChange={this.changeLocation} value={this.state.location}/>
        <TextField label='Activity Status' type="boolean" placeholder="Activity Status" fullWidth required defaultValue="true"
        onChange={this.changeActivityStatus} value={this.state.activityStatus}/>
        </div> : null ;

    return(
        <div>
        <Grid>
            
                <Grid align="center">
                <Avatar style= {avatarStyle} ><PersonAddIcon/></Avatar>
               <h2 style={headerStyle}> Sign Up</h2>
               <Typography variant='caption'>Create an account now!!</Typography>
               </Grid>
               <form onSubmit={this.onSubmit} >

               <TextField label='FirstName' placeholder="Enter First Name" fullWidth required
                onChange={this.changefirstName} value={this.state.firstname}
                />
                {this.state.firstNameError ?(
                    <div style={{fontSize:12,color:"red"}}>{
                        this.state.firstNameError}
                    </div>
                ):null 
                    }



                <TextField label='LastName' placeholder="Enter Last Name" fullWidth required
                onChange={this.changelastName} value={this.state.lastname}
                />
                {this.state.lastNameError ?(
                    <div style={{fontSize:12,color:"red"}}>{
                        this.state.lastNameError}
                    </div>
                ):null 
                    }
               



               <TextField label='Email' placeholder="Enter Email" fullWidth required
               onChange={this.changeEmail} value={this.state.email}/>
                {this.state.emailError ?(
                    <div style={{fontSize:12,color:"red"}}>{
                        this.state.emailError}
                    </div>
                ):null 
                    }



               <TextField label='Phone Number' type ="number" placeholder="Enter Phone Number" fullWidth required
                onChange={this.changePhone} value={this.state.phone} />
                {this.state.phoneError ?(
                    <div style={{fontSize:12,color:"red"}}>{
                        this.state.phoneError}
                    </div>
                ):null 
                    }

               <TextField  label='Password' placeholder="Enter Password" type="password" fullWidth required
                onChange={this.changePassword} value={this.state.password} 
                />
                 {this.state.passwordError ?(
                    <div style={{fontSize:12,color:"red"}}>{
                        this.state.passwordError}
                    </div>
                ):null 
                    }


               <TextField label='Confirm Password' placeholder="Confirm Password" type="password" fullWidth required
                onChange={this.changeConfirmPassword} value={this.state.confirmpassword}/>



                <TextField label="Birthdate"  type="date"  defaultValue="1997-09-11" fullWidth required
                 onChange={this.changeBirthDate} value={this.state.birthDate}/>

            
                <RadioGroup as={TextField}  label = "Gender" style={{ display: 'inline', margin:'2 auto'}}>
                <FormLabel component="legend">Gender
                        <input type="radio" value="male" name="gender"
                         checked={this.state.gender === "male"}
                         onChange={this.changeGender}/> Male
                        <input type="radio" value="female" name="gender"
                        checked={this.state.gender === "female"}
                        onChange={this.changeGender}/> Female </FormLabel> </RadioGroup>
                
                <br></br><br></br>



                <div className="radio"> Do you wish to work as delivery executive?
                    <label>                    
                        <input type="radio" value='delivery' 
                        clickedYes={this.state.clickedYes}
                        onClick={this.yesHandler}
                        checked={this.state.selectedOption === 'delivery'} 
                        onChange={this.changeRole} /> 
                     </label>

                {radioYes}
               
                </div> 
                <br></br>
                 

       
      
      <Button type='submit' variant="contained" color='primary' style={btnStyle} fullWidth required value='Submit'> Sign Up</Button>
      </form>
    </Grid>
        </div>
    )
    }
}
export default Signup;