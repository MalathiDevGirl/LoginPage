import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";
import { ReactComponent as FacebookLogo } from '../../assests/facebook.svg';
import { ReactComponent as GoogleLogo } from '../../assests/google.svg';
import { ReactComponent as LinkedinLogo } from '../../assests/linkedin.svg';
import EyeIcon from '../../assests/eye.svg';
import './registerForm.style.css';
const RegisterForm = () => {
    const passwordShowHideHandler = () => {
        let passwordId = document.getElementById('passwordInput');
        passwordId.type === "password" ? passwordId.type="text" : passwordId.type="password";
    }
    return (<div className="form">
        <section className="header">
            <p className="header-title">Already have an account?</p>
                <ButtonComponent className="signin"
                    value="SIGN IN" />
        </section>
        <section className="title">
            <h2 className="welcome-title">Welcome to Focus!</h2>
            <p className="register-title">Register your account</p>
        </section>
        <section className="all-inputs">
            <InputComponent name="name"
                type="text"
                placeholder="Malathi"
                labelValue="Name"
                id="nameInput" />
            <InputComponent name="email"
                type="email"
                placeholder="malls@gmail.com"
                labelValue="Email" 
                id="emailInput"/>
            <InputComponent name="password"
                type="password"
                placeholder="8+ characters"
                labelValue="Password"
                id="passwordInput">
                <button className="showHidePassword"><img src={EyeIcon} onClick={passwordShowHideHandler} alt="hide/show"/></button> </InputComponent>          
        </section>
        <section className="loginButton-container">
                <ButtonComponent className="login"
                    value="Login" />
        </section>
        <section className="footer">
            <p className="footer-title">Create account with </p>
                <div className="media-logo"><FacebookLogo alt="facebook"/></div>
                <div className="media-logo"><LinkedinLogo alt="google"/> </div>                
                <div className="media-logo"><GoogleLogo alt="linkedin"/></div>
            
        </section>
    </div>)
}
export default RegisterForm;