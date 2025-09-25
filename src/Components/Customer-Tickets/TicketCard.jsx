import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const TicketCard = ({ ticket, setInProgress, inProgress, setRunningTask, runningTasks }) => {
  const notify = () => {
    toast.success(`Ticket "${ticket.title}" added to In-Progress`, {
      position: "top-right",
    });
  };
  const [isSelected, setIsSelected] = useState(false);
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Critical":
        return "text-red-800 font-bold";
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const handleClick = () => {
    if (!isSelected) {
      setIsSelected(true);
      setInProgress(inProgress + 1);
      if (!runningTasks.find((t) => t.id === ticket.id)) {
        setRunningTask([...runningTasks, ticket]);
      }
      notify();
    }
  };
  return (
    <>
      <button disabled={isSelected} onClick={handleClick} className="cursor-pointer">
        <div className="card bg-base-100 min-h-40 shadow-sm">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h3 className="card-title font-medium">{ticket.title}</h3>
              <div className={`${isSelected ? "bg-[#f8f3b9]" : "bg-[#b9f8cf]"} rounded-2xl py-1 px-3 flex items-center gap-1`}>
                <div className={`w-4 h-4 ${isSelected ? "bg-[#febb0c]" : "bg-[#02a53b]"} rounded-2xl`}></div>
                <p>{isSelected ? "In- Progress" : "Open"}</p>
              </div>
            </div>
            <p className="text-[#627382] text-left">{ticket.description}</p>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <p className="text-[#627382]">#{ticket.id}</p>
                <p className={getPriorityColor(ticket.priority)}>
                  <span>{ticket.priority}</span> <span>Priority</span>
                </p>
              </div>
              <div className="flex gap-4 text-[#627382]">
                <p>{ticket.customer}</p>
                <p className="text-center">
                  <span>
                    <i className="fa-regular fa-calendar fa-lg"></i>
                  </span>{" "}
                  <span>{ticket.createdAt}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
      
    </>
  );
};

export default TicketCard;
