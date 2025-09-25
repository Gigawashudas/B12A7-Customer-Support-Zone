
import TicketCard from "./TicketCard";

const CustomerTickets = ({ tickets, setInProgress, inProgress, setRunningTask, runningTasks }) => {
  
  return (
    <div className="w-5/7 max-sm:w-full flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">Customer Tickets</h2>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-4">
        {tickets.map((ticket) => (
          <TicketCard runningTasks={runningTasks} setRunningTask={setRunningTask} inProgress={inProgress} setInProgress={setInProgress} key={ticket.id} ticket={ticket}></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
