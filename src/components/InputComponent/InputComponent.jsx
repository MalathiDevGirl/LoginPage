import './input.style.css';
const InputComponent = (props) => {
    return (
        <div className="input-container">
            <label htmlFor={`${props.name}`}>{`${props.labelValue}`}
                <input type={`${props.type}`} name={`${props.name}`} placeholder={`${props.placeholder}`}/>
            </label>
        </div>);
}
export default InputComponent;