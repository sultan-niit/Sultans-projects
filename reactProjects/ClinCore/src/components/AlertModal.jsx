import { Link } from "react-router-dom";

export default function AlertModal({ ...props }) {
    return (
        <>
            <div className="alert-overlay" id="alert">
                <div className="alert-container">
                    <div className="image-wrapper">
                        <img src={props.image} alt="Alert" />
                    </div>
                    <h4>{props.message}</h4>
                    <Link to={props.redirectUrl}>
                        <button className="btn" title={props.buttonTitle}>
                            {props.buttonTitle}
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
