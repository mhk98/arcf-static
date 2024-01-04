import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 100) {
          setShowBackToTopButton(true);
        } else {
          setShowBackToTopButton(false);
        }
      },
      []
    );

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  // Empty dependency array means the effect runs once on mount

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showBackToTopButton && (
        <button
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "20px",
            backgroundColor: "#FBD45A",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: "1000",
          }}
        >
          <i className="icon-up-arrow" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
