import { Link } from "react-router-dom";
import defaultSuccessImage from "../assets/success.jpeg";

export default function AlertModal({ ...props }) {
    const redirectTarget = props.redirectLink || props.redirectUrl || "/patient-portal";
    const modalImage = props.image || defaultSuccessImage;
    const buttonText = props.buttonTitle || props.buttonText || "Okay, Thanks";

    return (
        <div className="alert-overlay alertModal" id="alert">
            <div className={`alert-container ${props.type ? `alert-container--${props.type}` : "alert-container--success"}`}>
                <div className="image-wrapper">
                    <img src={modalImage} alt="Alert Feedback" />
                </div>
                <h4>{props.message}</h4>
                <Link to={redirectTarget} state={props.state}>
                    <button className="btn btn--success" title={buttonText}>
                        {buttonText}
                    </button>
                </Link>
            </div>
        </div>
    );
}
