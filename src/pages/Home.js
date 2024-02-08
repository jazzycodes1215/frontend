import Navbar from "../components/Navbar";
import TaskContainer from "../components/TaskContainer";
import ApprovalContainer from "../components/statusFields/ApprovalContainer";
import ProgressContainer from "../components/statusFields/ProgressContainer";
import "../styles/Home.css"

const Home = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="flex justify-between">
        <ApprovalContainer />
        <TaskContainer />
         </div>
         <ProgressContainer />
    </div>
  );
};

export default Home;
