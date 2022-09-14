import './input.style.css';
const InputComponent = (props) => {
    return (
        <div className="input-container">
            <label htmlFor={`${props.name}`}>{`${props.labelValue}`}
                <input autocomplete="off" id={`${props.id}`} type={`${props.type}`} name={`${props.name}`} placeholder={`${props.placeholder}`}/>
            </label>{props.children}
        </div>);
}
export default InputComponent;