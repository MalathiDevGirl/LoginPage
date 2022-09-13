import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";
import { ReactComponent as FacebookLogo } from '../../assests/facebook.svg';
import { ReactComponent as GoogleLogo } from '../../assests/google.svg';
import { ReactComponent as LinkedinLogo } from '../../assests/linkedin.svg';
import './registerForm.style.css';
const RegisterForm = () => {
    return (<div className="form">
        <section className="header">
            <p className="header-title">Already have an account?</p>
                <ButtonComponent className="signin"
                    value="SIGN IN" />
        </section>
        <section className="title">
            <h2 className="welcome-title">Welcome to Focus</h2>
            <p className="register-title">Register your account</p>
        </section>
        <section className="all-inputs">
            <InputComponent name="name"
                type="text"
                placeholder="Malathi"
                labelValue="Name" />
            <InputComponent name="email"
                type="email"
                placeholder="malls@gmail.com"
                labelValue="Email" />
            <InputComponent name="password"
                type="password"
                placeholder="8+ characters"
                labelValue="Password" />
        </section>
        <section className="login-container">
                <ButtonComponent className="login"
                    value="Login" />
        </section>
        <section className="footer">
            <p>Create account with 
                <FacebookLogo alt="facebook"/>
                <GoogleLogo alt="linkedin"/>
                <LinkedinLogo alt="google"/> 
            </p>
        </section>
    </div>)
}
export default RegisterForm;