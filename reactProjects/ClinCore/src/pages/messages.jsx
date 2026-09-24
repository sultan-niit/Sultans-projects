import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import MessagesPanel from "../components/MessagesPanel";
import PageFooter from "../components/PageFooter";

export default function Messages() {
  return (
    <>
      <div className="dashboard-wrapper">
        <Sidebar />

        <div className="content-wrapper">
          <TopHeader pageTitle="Messages" />

          <div className="main-content">
                <MessagesPanel />

                <PageFooter
                  className="messages-page-footer"
                  leftClass="messages-footer-left"
                  socialsClass="messages-footer-socials"
                />
            </div>
        </div>
    </div>

    </>
  );
}
