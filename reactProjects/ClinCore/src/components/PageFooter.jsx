export default function PageFooter({ ...props }) {

    /* ============================================================
       DASHBOARD VARIANT: .page-footer wrapper with footer-copy & footer-links
       Used on: dashboard page — pass variant="dashboard"
       ============================================================ */
    if (props.variant === "dashboard") {
        return (
            <>
                <div className="page-footer">
                    {/* LEFT: Copyright text */}
                    <p className="footer-copy">Copyright &copy; 2024 Peterdraw</p>

                    {/* RIGHT: Navigation links */}
                    <div className="footer-links">
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Term and conditions</a>
                        <a href="#" className="footer-link">Contact</a>
                    </div>
                </div>
            </>
        );
    }

    /* ============================================================
       DEFAULT VARIANT: All other pages (appointments, patients, doctors,
       departments, messages, payments, inventory)
       — className sets wrapper, leftClass & socialsClass set inner divs
       — Defaults to appointments-* class names
       ============================================================ */
    const wrapperClass = props.className || "appointments-page-footer";
    const leftClass = props.leftClass || "appointments-footer-left";
    const socialsClass = props.socialsClass || "appointments-footer-socials";

    return (
        <>
            <div className={wrapperClass}>

                {/* LEFT SIDE: Copyright & legal links */}
                <div className={leftClass}>
                    <span>Copyright &copy; 2024 Peterdraw</span>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Term and conditions</a>
                    <a href="#">Contact</a>
                </div>

                {/* RIGHT SIDE: Social media icon links */}
                <div className={socialsClass}>
                    <a href="#" title="Facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" title="X / Twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" title="Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" title="YouTube"><i className="bi bi-youtube"></i></a>
                    <a href="#" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </>
    );
}
