import React from "react";

function CommonsLabel({ field }: { field: string }) {
  return (
    <div className="CommonsLabel">
      <label>{field}</label>
    </div>
  );
}

export default CommonsLabel;
