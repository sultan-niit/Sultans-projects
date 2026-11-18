export default function InputField({ ...props }) {
    return (
        <div className="input-wrapper">
            <label htmlFor={props.id || props.name}>
                {props.title}
                {props.required !== false && <span>*</span>}
            </label>
            <input
                type={props.inputType || "text"}
                id={props.id}
                name={props.name}
                placeholder={props.placeHolder}
                className="text-field"
                onChange={props.handleChangeValue}
                value={props.inputValue}
                autoComplete={props.autoComplete}
            />
            {props.error ? <span className="error">{props.error}</span> : null}
        </div>
    );
}
