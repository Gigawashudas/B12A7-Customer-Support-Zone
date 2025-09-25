import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const ticketPromise = fetchTickets();

function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100">
        <Hero resolvedCount={resolvedCount} inProgress={inProgress}></Hero>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-full">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <Main resolvedCount={resolvedCount} setResolvedCount={setResolvedCount} inProgress={inProgress} setInProgress={setInProgress} ticketPromise={ticketPromise}></Main>
        </Suspense>
      </div>

      <Footer></Footer>
      <ToastContainer autoClose={5000} />
    </>
  );
}

export default App;
