import SuccessImg from "../assets/success.jpeg";
import { Link } from "react-router-dom";

export default function AlertModal({ ...props }) {
    return (
        <>
            <div className="alert-overlay" id="alert">
                <div className="alert-container">
                    <div className="image-wrapper">
                        <img src={SuccessImg} alt="Success" />
                    </div>
                    <h4>{props.message}</h4>
                    <Link to={props.redirectUrl}>
                        <button className="btn" title="Okay, Thanks">
                            Okay, Thanks
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}