export default function Button({ ...props }) {
    let baseClass = props.className || "btn-login";
    return (
        <button
            type={props.type || "button"}
            id={props.id}
            className={baseClass}
            style={props.style}
        >
            {props.title || props.children || "Submit"}
        </button>
    );
}

