import RegisterForm from '../../components/RegisterFormComponent/RegisterForm';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import CardComponent from '../../components/CardComponent/CardComponent';

const RegisterPage = () => {
    return (
        <CardComponent>
            <ImageComponent/>            
            <RegisterForm/>
        </CardComponent>
    );
}
export default RegisterPage;