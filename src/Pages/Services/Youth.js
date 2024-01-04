import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const Youth = () => {
  const { quillRef } = useQuill();

  return (
    <div style={{ width: 500, height: 300, marginTop: "150px" }}>
      <div ref={quillRef} />
    </div>
  );
};

export default Youth;
