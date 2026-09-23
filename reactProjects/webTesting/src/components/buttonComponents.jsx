export default function ButtonComponents({ ...props }) {
    return (
        <>
            <button className="btn" type={props.inputType} id={props.id} 
            onClick={props.action}
            title={props.buttonTitle}>
                {props.buttonTitle}

            </button>
        </>
    )
}