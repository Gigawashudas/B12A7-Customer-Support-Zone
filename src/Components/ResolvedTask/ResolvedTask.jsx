import React from "react";

const ResolvedTask = ({task}) => {
  return (
    <div className="resolved-card px-4 py-5 bg-[#e0e7ff] rounded">
      <h3 className="font-medium">{task.title}</h3>
    </div>
  );
};

export default ResolvedTask;
