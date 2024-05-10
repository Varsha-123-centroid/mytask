import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
    var errs="";
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };
  return (
    <div> 
        <Header />
        <div id="rs-wrapper" class="bg-darken">
    
        <div class="login-wrap login-wrap-lg p-a-md m-x-auto">
        {errs}
        <br/><br/> <br/><br/>
                <div class="rs-col-stacked full-width-on-mobile bg-grad-03 borderless light-bs m-a-0 b-r-a">
    
                    <div class="stacked-item bg-white">
                        <div class="p-a-lg">
                            <p class="f-l-15 text-uppercase text-center text-muted">Sign In</p>
    
                            <form class="m-b-lg" id="rs-validation-login-page"  method="post"  action="login.php">
                                <div class="form-group has-feedback feedback-left">
                                    <label class="control-label">Username</label>
                                    <input type="text" name="username" placeholder="Username/UserID/E-mail"  class="form-control" />
                                    
                                    <span style={{cursor:"pointer",position: "absolute",top: "42px",right: "15px"}} class="gcon gcon-user f-s-xs form-control-feedback"  aria-hidden="true"></span>
						
							{/* <span style={{cursor:"pointer",position: "absolute",top: "42px",right: "15px"}}  id="eye" class="fa fa-eye-slash"></span> */}
                                </div>
    
                                <div class="form-group has-feedback feedback-left">
                                <label class="control-label">Password</label>
                                <input 
                                type={showPassword ? "text" : "password"} 
                                id="password" 
                                name="password" 
                                placeholder="Password" 
                                className="form-control" 
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                            />
                            <span 
                                className="password-toggle" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                               
                            </span>
                                 </div>
                                
                                <div class="form-group">
                                    <div class="checkbox checkbox-custom text-muted">
                                        
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="submit"  class="btn btn-success btn-block text-uppercase" value="LOGIN"/>
                                </div>
                            </form>
                                <p class="text-center text-muted small m-a-0">
                                <a href="forgot_password.php">Forgot Password</a><br />
                            </p>
                        </div>
                    </div>
                    <div class="stacked-item text-center">
                        <div class="p-a-lg">
                            <p class="f-l-15 text-uppercase text-center text-lighten">New here?</p>
                            <img src="templates/bs_wtk/images/taskmantra_img/taskmantra_logo.png"  class="avatar-img" alt="logo" />
                            <form class="m-b-lg">
                                <p class="text-white">Create an account in less than 2 minutes!</p>
                                <div class="form-group">
                                    <a href="signup_new.php" class="btn btn-warning btn-wide text-uppercase">Create an Account</a>
                                </div>
                            </form>
                            
                        </div>
                    </div>
    
                </div>
                <br/><br/> <br/><br/> <br/><br/>
            </div>
    
    
            
    
        </div>
        <Footer />
        </div>
  )
}

export default Login