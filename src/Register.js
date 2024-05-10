import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Register = () => {
  const registerhere="";
  return (
    <div>
        <Header />
        <div className="nav-container">
            <nav className="bar bar-4 bar--transparent bar--absolute" data-fixed-at="200">       
                <div className="container">
                      <div className="row pt-2">
                        
                        <div className="col-md-4 col-md-offset-0 col-sm-5 col-sm-offset-0 col-xs-8 col-xs-offset-2 pt-2">
                            <div className="bar__module pt-2">
                              {registerhere}
                            </div>
                        </div>
                      </div>
                </div>
            </nav>
        </div>
   
        <div className="main-container">
           <section className="imageblock switchable switchable--switch feature-large bg--dark space--sm">
                <div className="imageblock__content col-md-6 col-sm-6 pos-right">
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-5 col-sm-7 mt--2">
                      <form id="defaultForm" method="post" className="form-email" action="" onload="alertme()" data-error="Please fill in all fields correctly.">             
                        <div className="row">
                          <div className="boxed boxed--border">
				                    <span id="chk_avail" className="chk_avail"> </span>    
				                    <h5 style={{marginBottom: "5px",color:"white"}}>INTRODUCER DETAILS</h5>   
				                    <div className="col-sm-5">
				                      <label for="invitedby"> <span style={{color:"red"}}>*</span>&nbsp;Introducer ID</label>
				                      <input type="text" onkeypress="return isNumber(event)" name="invitedby_id" value=""   className="validate-required  " id="invitedby_id" placeholder="INVITED USER ID"  onchange="sponsor_tracker('',this.value)" onkeypress="$(this).removeClass('field-error');" maxlength="8" />
				                    </div>
                            <div className="col-sm-1 or"> <b>OR</b></div>
				                    <div className="col-sm-6" >
				                      <label for="invitedby"> <span style={{color:"red"}}>*</span>&nbsp;Introducer Username</label>
				                      <input type="text" name="invitedby" value=""   className="validate-required " id="invitedby" placeholder="INVITED USER NAME" readonly="readonly" onfocus="return getInfo(this.value, '');" onchange="sponsor_tracker(this.value,'')" onkeypress="$(this).removeClass('field-error');" maxlength="15" />
				                    </div>
                            <br/> <br/>
                            <h5 style={{marginBottom: "5px",paddingTop: "28px",color:"white"}}>PERSONAL INFORMATION AS PER ID PROOF</h5>     
                            <div className="col-sm-6">
                              <label for="fname"><span style={{color:"red"}}>*</span>&nbsp;First Name</label>
                              <input type="text" name="fname" id="fname" placeholder="First Name"  className="validate-required"  onchange="lettersOnlyCheck(this);"  value=""   required onkeypress="$(this).removeClass('field-error');" minlength="3" maxlength="60" />
                              <span className="help-block help-cust" style={{color:"white"}}>Only letters, space allowed. </span>
                            </div>
                            <div className="col-sm-6">
                                <label for="lastname"><span style={{color:"red"}}>*</span>&nbsp;Last Name</label>
                                <input type="text" name="lname" id="lastname" className="validate-required" value=""  onchange="lettersOnlyCheck(this);"  placeholder="Last Name" required onkeypress="$(this).removeClass('field-error');"   maxlength="60" />
                                <span className="help-block help-cust" style={{color:"white"}}>Only letters, space allowed. </span>
                            </div>
                          
                            <div className="col-sm-12">
                              
                                    <label for="lastname"><span style={{color:"red"}}>*</span>&nbsp;GENDER</label>
                                    <div style={{borderColor:"#fff"}}>
                                          <label style={{marginBottom:"10px"}}>FEMALE&nbsp;&nbsp;&nbsp;</label>
                                    <div className="input-radio checked" style={{paddingRight: "5%"}} id="female_opt">
                            
                                    <div className="inner"></div>
                                        <input type="radio" name="gender" value="female" checked="checked"  />
                                    </div>
                                    <label>MALE&nbsp;&nbsp;&nbsp;</label>
                                    <div className="input-radio" style={{paddingRight: "5%"}} id="male_opt" onclick="$('#genderwarn').addClass('modal-active');$('#female_opt').addClass('checked');$('#male_opt').removeClass('checked');" >
                                          <div className="inner"></div>
                                          <input type="radio" name="gender" value="male"  />
                                        </div>
                                    </div>   
                                      
                              </div>
           
                              <div className="col-sm-12">
                                  <label for="dob"><span style={{color:"red"}}>*</span>&nbsp;Date Of Birth</label> 
                                  <div style={{display:"inline-flex",width:"100%"}}>
                                    <div style={{width:"70%"}}>
                                
                                    <input type="date" style={{height:"38px"}} name="dt_birth_day" id="dt_birth_day" className="form-control"  onchange="findage()" />
                                     
                                    </div> 
                                    <div style={{width:"5%"}}></div>  
                                    <div style={{width:"25%"}}> 
                                    <input type="number" placeholder="Age" style={{height:"38px"}}  className="validate-required" readonly autocomplete="off"  name="age1" id="age1" value="{var name='age'}" />
                                    </div>
                                    </div> 
                              </div> 
                              {/* <div className="col-sm-12">
                                  <label for="dob"><span style={{color:"red"}}>*</span>&nbsp;Date Of Birth</label> 
                                  <div style={{display:"inline-flex",width:"100%"}}>
                                    <div style={{width:"20%"}}>
                                
                                    <select  name="dt_birth_day" id="dt_birth_day" className="form-control" style={{width:"90px"}} onchange="findage()" >
                                           
                                    </select>
                                    </div>   
                                    <div style={{width:"5%"}}></div>
                                    <div style={{width:"20%"}}>
                                        <select  name="dt_birth_month" id="dt_birth_month" className="form-control" style={{width:"90px"}} onchange="findage()">
                                            
                                        </select>
                                    </div>   
                                    <div style={{width:"5%"}}></div>
                                    <div style={{width:"20%"}}>   
                                        <select  name="dt_birth_year" id="dt_birth_year" className="form-control" style={{width:"85px"}} onchange="findage()">
                                             
                                        </select>
                                    </div>
                                    <div style={{width:"10%"}}></div>  
                                    <div style={{width:"20%"}}> 
                                    <input type="number" placeholder="Age" style={{height:"38px"}}  className="validate-required" readonly autocomplete="off"  name="age1" id="age1" value="{var name='age'}" />
                                    </div>  
                              </div>    
                            </div>    */}
       

                              <div className="col-sm-12" >
                              <br />
                                <label for="mobile"><span style={{color:"red"}}>*</span>Mobile No</label>
                                  <div style={{display:"inline-flex",width:"100%"}}>
                                          <div style={{width:"36%"}}>
                                              <input type="text" id='dailcode' name="dialcode" className="validate-required" value="India (+91)" readonly="true" />
                                          </div>
                                          <div style={{width:"5%"}}></div>
                                          <div style={{width:"90%"}}>
                                                  <input name="mobile" id="mobile" placeholder="10 Digit Mobile Number"  className="validate-required" oninput="msgmob();" type="tel" value="" maxlength="10" onchange="mobnum();" 
                                                  required onkeypress="$(this).removeClass('field-error');return isNumber(event)" /> 
                                                  <input type="hidden" id="status_m" />
                                                  <span id="chk_avail_mobile" className="chk_avail"> </span>
                                          </div>
                                  
                                  </div>
                            </div>
       
                            <div className="col-sm-12" >
                            <br />
                              <label for="mobile">Mobile OTP</label>
                                <div style={{display:"inline-flex",width:"100%"}}>
                                        <div style={{width:"45%"}}>
                                            <input type="button" style={{backgroundColor:"#81c784", color:"#fff",height:"38px"}} id='mobileotp' name="mobileotp" className="btn btn--primary" onclick="sendme();" value="Send OTP To Mobile" />
                                            <label id="timerm" style={{display:"none",fontSize:"20px",color:"yellow",textAlign:"right"}}></label>
                                        </div>
                                        
                                        <div style={{width:"5%"}}></div>
                                        <div style={{width:"27%"}}>
                                                <input name="code" id="code" placeholder="Mobile OTP" oninput="msgmobotp();"  className="" type="tel" value="" maxlength="10" /> 
                                                <input type="hidden" id="status_motp" />
                                                
                                        </div>
                                        <div style={{width:"5%"}}></div>
                                        <div style={{width:"18%"}}>
                                            <input type="button" style={{backgroundColor:"#f6bb42",color:"#fff",height:"38px"}} id='motpsub' onclick="verify();" name="motpsub" className="btn btn--primary"  value="Verify" />
                                        </div>
                                        
                                </div>
                                <span id="chk_avail_mobileotp" className="chk_avail" style={{color: "#00ff5f"}}> </span>
                          </div>
                          
   
                            <div className="col-sm-12" >
                            <br />
                                  <label for="email"><span style={{color:"red"}}>*</span>&nbsp;Gmail ID</label>
                                  
                                
                                    <input type="text" name="edu_city" id="edu_city"  maxlength="50"   className="validate-required" value="{var name='email'}" placeholder="" onblur="edValueKeyPress()" onfocus="emailfocusme()" onchange="onchangeemail();" oninput="inputme_email()" autocomplete="off" />
                                    <span id="chk_avail_email" className="chk_avail"> </span>
                                    <span className="atgmail" id="atgmail1">@gmail.com</span>
                                    
                            </div>
                                  
                                  
                                  
                            <div className="col-sm-12" >
                                    
                                  <label for="mobile">&nbsp;</label>
                                    <div style={{display:"inline-flex",width:"100%"}}>
                                    <div style={{width:"45%"}}>
                                                <input type="button" id='emailotp' style={{backgroundColor:"#81c784",color:"#fff",height:"38px"}} name="emailotp" onclick="sendemail();" className="btn btn-info" value="Send OTP To Email" />
                                                <label id="timerr" style={{display:"none",fontSize:"20px",color:"yellow",textAlign:"right"}}></label>
                                            </div>
                                            
                                            
                                            <div style={{width:"5%"}}></div>
                                            <div style={{width:"27%"}}>
                                                    <input name="ecode" id="ecode"  placeholder="Email OTP" oninput="msgemailotp();"  className="validate-required" type="tel" value="{var name='mobile'}" maxlength="10" onchange="mobnum();" 
                                                    required onkeypress="$(this).removeClass('field-error');return isNumber(event)" /> 
                                                    <input type="hidden" id="status_m" />
                                                    
                                            </div>
                                            <div style={{width:"5%"}}></div>
                                            <div style={{width:"18%"}}>
                                                <input type="button" style={{backgroundColor:"#f6bb42",color:"#fff",height:"38px"}} id='eotpsub' onclick="verifyemail();" name="eotpsub" className="btn btn--primary"  value="Verify" />
                                            </div>
                                            
                                    </div>
                                    <span id="chk_avail_emailotp" className="chk_avail" style={{color: "#00ff5f"}}> </span>
                            </div>
           
           
           
           
          
                        	<div className="col-md-12" id="country">
									
                              <label className="control-label"><span style={{color:"red"}}>*</span>&nbsp;Country</label>
                              <input type="text" className="validate-required" readonly  autocomplete="off"  name="prcountry" id="prcountry" value="India" />
                          
								          </div>
							            <div className="col-md-12" id="state">
								
                             < label className="control-label"><span style={{color:"red"}}>*</span>&nbsp;State</label>

                              <select name="pr_state"  id="pr_state" autocomplete="off" className="rs-selectize-single" >
                    <option >Select</option>
                              </select>
								
							            </div>
   
       
                          <div className="col-sm-12">
                            
                              <label for="uname"><span style={{color:"red"}}>*</span>&nbsp;Username</label>
                              <input name="uname" type="text" className="validate-required" value="" onblur="chk_uname_length()" oninput="myuname(this);" id="uname" maxlength="15" onchange="chk_username();"  placeholder="Username" />
                              <span id="chk_avail_username" className="chk_avail"></span>
                              <span className="help-block help-cust"  style={{color:"white"}}>Minimum 5 Characters. Only Letters, Numbers and Dots are allowed. </span>
                              
                          </div>
        
                          <div className="col-sm-12">
                              <label for="pwd"><span style={{color:"red"}}>*</span>&nbsp;Password</label>
                              <input type="password" name="password" id="password"  maxlength="15" minlength="7" value="{var name='password'}"   className="validate-required"  placeholder="Password" required oninput="typeme($(this).val())"  onblur="pwcheck($(this).val())" />
                              <span style={{cursor:"pointer",position: "absolute",top: "39px",right: "22px",color: "black"}}  id="eye" className="fa fa-eye-slash"><a></a></span> 
                          
                            
                      
                              <span className="help-block help-cust" id="held"  style={{color:"white"}}>Should contain atleast a Capital Letter and a Numeric value<br />(Minimum 7 letters)</span>
                            </div> 


                            <div className="col-sm-12" >
            
                                  <label for="rpwd"><span style={{color:"red"}}>*</span>Confirm Password</label>
                                    <input type="password" name="rpassword" id="rpwd" className="validate-required"  maxlength="15" minlength="7"   value="" placeholder="Repeat Password" required />
                                    {/* <span  style={{cursor:"pointer",position: "absolute",top: "40px",right: "22px",color: "black"}}  id="eyee" className="fa fa-eye-slash"><a></a></span>  */}
                            </div>
                                    <br /> 
                           
                             <div className="col-sm-12" style={{width:"100%",display:"none"}}>
                                      <input type="hidden" name="ctha_err_var" id="ctha_err_var" value="0" />
                                      <input type="text" name="captcha" className="validate-required" id="ctha_err_var" oninput="$('#ctha_err').hide();" placeholder="TYPE THE CHARACTERS YOU SEE IN THE PICTURE ABOVE" />
                                      <span className="help-block help-cust" id="ctha_err" style={{display:"none", color: "#e74c3c !important"}}>Incorrect Verification code </span>
                             </div>




                  </div>
         


        <div className="col-sm-12 boxed" style={{paddingLeft: "2.857143em",    paddingRight:" 2.857143em",width:"100%"}}>
            <input type="submit" className="btn btn--primary type--uppercase" id="createaccount" name="createaccount" value="Continue" onclick=" return submitformfunction();" style={{width:"100%"}} />                                        

          </div>
          </div>
</form>


                        </div>
                    </div>
            
                </div>
               
            </section>
           
        </div>
        <Footer />
        </div>
  )
}

export default Register