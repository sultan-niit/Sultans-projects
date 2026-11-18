import { Link } from "react-router-dom";
import successImage from "../assets/icon-images/success.gif";
import warningImage from "../assets/icon-images/warning.gif";

export default function AlertModal({ ...props }) {
    const isSuccess = props.type !== "error" && props.type !== "warning";
    const modalImage = props.image || (isSuccess ? successImage : warningImage);

    return (
        <div className="alert-overlay alertModal">
            <div className="alert-container">
                <div className="image-wrapper">
                    <img src={modalImage} alt={isSuccess ? "Success" : "Warning"} />
                </div>
                <h4>{props.message}</h4>
                {props.redirectLink ? (
                    <Link to={props.redirectLink} state={props.state}>
                        <button
                            className="btn"
                            type="button"
                            title="Okay, Thanks"
                            onClick={props.onClose}
                        >
                            Okay, Thanks
                        </button>
                    </Link>
                ) : (
                    <button
                        className="btn"
                        type="button"
                        title="Okay"
                        onClick={props.onClose}
                    >
                        Okay
                    </button>
                )}
            </div>
        </div>
    );
}
