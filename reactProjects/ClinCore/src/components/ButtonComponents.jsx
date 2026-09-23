export default function ButtonComponents({ ...props }) {
    return (
        <>
            {/* Login / primary action button — title and type come from parent */}
            <button
                className="btn-login btn"
                type={props.inputType}
                id={props.id}
                title={props.buttonTitle}
            >
                {props.buttonTitle}
            </button>
        </>
    );
}
