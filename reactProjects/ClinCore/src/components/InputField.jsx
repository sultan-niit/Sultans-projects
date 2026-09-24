export default function InputField({ ...props }) {
    return (
        <div className={props.containerClass || "form-group"}>
            {props.title && <label className="form-label">{props.title}</label>}
            <div className={props.wrapperClass || "input-wrapper"}>
                <input
                    type={props.inputType || props.type || "text"}
                    placeholder={props.placeHolder || props.placeholder}
                    className={props.className || "form-input text-field"}
                    value={props.value}
                    onChange={props.onChange}
                    id={props.id}
                    name={props.name}
                />
            </div>
        </div>
    );
}
