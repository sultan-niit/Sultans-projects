export default function InputField({ ...props }) {
    return (
        <>
            <div className="form-group">
                <label className="form-label">{props.title}</label>
                <div className="input-wrapper">
                    <input
                        type={props.inputType}
                        placeholder={props.placeHolder}
                        className="form-input text-field"
                    />
                </div>
            </div>
        </>
    );
}
