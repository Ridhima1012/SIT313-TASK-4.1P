import React from 'react';
import './Signup.css';
 
const Signup =({})=> {
    return(

   <div>
    <h3 class="Heading"> SIGN UP FOR OUR DAILY INSIDER  </h3>
    <input class="Input" type=" email" name="email" id="Email" required="required" placeholder="Email ID"/>
    <button class="Button" type="submit">SUBSRIBE</button>
    </div>
    );
}

    export default Signup;