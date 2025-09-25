import React, { use, useState } from "react";
import CustomerTickets from "../Customer-Tickets/CustomerTickets";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const Main = ({ ticketPromise, setInProgress, inProgress, setResolvedCount, resolvedCount }) => {
  const [runningTasks, setRunningTask] = useState([]);
  const [completedTasks, setCompletedTask] = useState([]);
  const ticketsData = use(ticketPromise);
  const [tickets, setTickets] = useState([...ticketsData]);
  return (
    <div className="flex max-sm:flex-col p-20 max-sm:p-4 pt-0 gap-8">
      <CustomerTickets runningTasks={runningTasks} setRunningTask={setRunningTask} inProgress={inProgress} setInProgress={setInProgress} tickets={tickets}></CustomerTickets>
      <div className="aside flex flex-col gap-10 max-sm:w-full w-2/7">
        <div className="task-status flex flex-col gap-4">
          <h3 className="font-semibold text-2xl">Task Status</h3>
          {runningTasks.length === 0 ? <p className="text-[#627382]">Select a ticket to add to Task Status</p> : runningTasks.map((task) => <TaskStatus key={task.id} setInProgress={setInProgress} inProgress={inProgress} tickets={tickets} setTickets={setTickets} runningTasks={runningTasks} setRunningTask={setRunningTask} completedTasks={completedTasks} setCompletedTask={setCompletedTask} resolvedCount={resolvedCount} setResolvedCount={setResolvedCount} task={task} />)}
        </div>
        <div className="resolved-task flex flex-col gap-4">
          <h3 className="font-semibold text-2xl">Resolved Task</h3>
          {completedTasks.length === 0 ? <p className="text-[#627382]">No resolved tasks yet</p> : completedTasks.map((task) => <ResolvedTask key={task.id} task={task} />)}
        </div>
      </div>
    </div>
  );
};

export default Main;
