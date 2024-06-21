const Signup = () => {
    return (  
        <div className="signup-container">
            <div className="testimonial">
                <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="smiling man" />
                <h3>Monika Khanka </h3>
                <p>I have learnt driving from Khanka driving school, and it was a fabulous experience.
                    I learnt drining in easy way just in 20 days of training.
                </p>
            </div>
            <div className="divider"></div>
            <form className="signup-form">
                <h3>SIGN UP</h3>
                <div className="input-box">
                    <input type="email" name="email" placeholder="Email Address" />
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="agreement"/>
                    <span>I Agree with terms of service</span>
                </div>
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    );
}
 
export default Signup;