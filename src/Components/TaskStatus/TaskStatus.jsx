import React from "react";
import { ToastContainer, toast } from "react-toastify";

const TaskStatus = ({ task, setResolvedCount, resolvedCount, setCompletedTask, completedTasks, setRunningTask, runningTasks, setTickets, tickets, inProgress, setInProgress }) => {
    const notify = () => {
        toast.success(`Ticket "${task.title}" Resolved`, {
          position: "top-right",
        });
      };
  return (
    <div className="status-card bg-white p-4 w-full flex flex-col gap-4 rounded">
      <h3 className="font-medium">{task.title}</h3>
      <button
        onClick={() => {
          setResolvedCount(resolvedCount + 1);
          setRunningTask(runningTasks.filter((t) => t.id !== task.id));
          setCompletedTask([...completedTasks, task]);
          setTickets(tickets.filter((t) => t.id !== task.id));
          setInProgress(inProgress - 1);
          notify();
        }}
        className="w-full p-3 bg-[#02a53b] rounded text-white cursor-pointer"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
