import UpvoteIcon from "../icons/thumbs-up.svg";

const ChallengeCard = ({ title, description, upvotes, createdAt, tags }) => {
  return (
    <div className="mb-4 w-5/6 rounded-md border border-slate-400 p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 leading-tight">{description}</p>
      <div className="mt-3 flex flex-wrap items-center">
        {tags.map((tag) => (
          <span className="ml-2 rounded-2xl border border-blue-500 bg-cyan-50 px-2 py-1 text-blue-500">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <button
          className={
            upvotes.includes(localStorage.getItem("empId"))
              ? `flex items-center rounded-md bg-blue-600 p-2 text-white`
              : `rounded-md border border-slate-500 p-2 hover:bg-blue-300 hover:text-white`
          }
        >
          {upvotes.includes(localStorage.getItem("empId")) ? (
            <img src={UpvoteIcon} className="text-white" />
          ) : (
            "Upvote"
          )}
          <span
            className={`rounded-md ${upvotes.includes(localStorage.getItem("empId")) ? "" : "bg-blue-500"} ml-1 px-2 py-1 text-white`}
          >
            {upvotes.length}
          </span>
        </button>
        <div className="flex flex-col ">
          <span className="font-bold">Created</span>{" "}
          {new Date(createdAt).toDateString()}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
