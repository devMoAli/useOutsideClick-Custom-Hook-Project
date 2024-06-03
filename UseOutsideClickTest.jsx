import React, { useRef, useState } from "react";
import "./styles.css";
import useOutsideClick from "./useOutsideClick";

export default function UseOutsideClickTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref} className="contentArea">
          <h1>This is random content</h1>
          <p>
            Please click outside of this content to close Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Quae possimus ipsam dolorem
            commodi dolorum non iste eum natus suscipit, quo animi aliquam
            minima assumenda esse? Minima corrupti quisquam ab cumque!
          </p>
        </div>
      ) : (
        <button
          className="modalContentBtn"
          onClick={() => setShowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
}
