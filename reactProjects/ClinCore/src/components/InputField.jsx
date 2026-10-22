export default function InputField({ ...props }) {
    const inputClasses = [
        props.className || "form-input text-field",
        props.error ? "input-error error-border" : ""
    ].filter(Boolean).join(" ");

    return (
        <div className={props.containerClass || "form-group"}>
            {props.title && <label className="form-label" htmlFor={props.id}>{props.title}</label>}
            <div className={props.wrapperClass || "input-wrapper"}>
                <input
                    type={props.inputType || props.type || "text"}
                    placeholder={props.placeHolder || props.placeholder}
                    className={inputClasses}
                    value={props.value ?? ""}
                    onChange={props.onChange || props.handleChangeValue}
                    id={props.id}
                    name={props.name}
                    autoComplete={props.autoComplete}
                />
            </div>
            {props.error && (
                <span className="field-error error-message" style={{ color: "#ef4444", fontSize: "0.82rem", marginTop: "4px", display: "block" }}>
                    {props.error}
                </span>
            )}
        </div>
    );
}
