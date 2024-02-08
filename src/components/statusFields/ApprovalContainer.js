import StatusItem from "./StatusItem";

const ApprovalContainer = () => {
  return (
    <div id="stat-container" className="mt-2 border-gray-600">
      <StatusItem heading={"Drafts"} count={0} color={"bg-blue-700"} />
      <StatusItem heading={"Processing"} count={0} color={"bg-yellow-400"} />
      <StatusItem
        heading={"Modifications Needed"}
        count={0}
        color={"bg-yellow-700"}
      />
      <StatusItem heading={"Cancelled"} count={0} color={"bg-red-700"} />
      <StatusItem
        heading={"Awaiting Final FDO Approval"}
        count={0}
        color={"bg-purple-700"}
      />
      <StatusItem heading={"Approved"} count={0} color={"bg-green-700"} />
    </div>
  );
};

export default ApprovalContainer;
