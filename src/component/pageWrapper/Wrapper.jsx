import { useRef, useEffect, useState } from "react";
import Profile from "../profile/Profile";
import "./Wrapper.css";

const Wrapper = ({ children }) => {
  const pageRightRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className="page-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="page-left">
              <Profile />
            </div>
          </div>
          <div className="col-md-8">
            <div
              ref={pageRightRef}
              className={`page-right ${scrolled ? "no-margin-top" : ""}`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
