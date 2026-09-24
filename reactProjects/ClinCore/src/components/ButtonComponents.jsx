export default function ButtonComponents({ ...props }) {
    const className = props.className || "btn-login btn";
    return (
        <button
            className={className}
            type={props.inputType || props.type || "button"}
            id={props.id}
            title={props.buttonTitle || props.title}
            onClick={props.onClick}
        >
            {props.icon && <i className={`bi ${props.icon}`}></i>}
            {props.buttonTitle || props.title || props.children}
        </button>
    );
}
