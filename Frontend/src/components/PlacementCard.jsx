import { Link } from "react-router-dom";

const PlacementCard = ({ drive }) => {
  const normalTime = new Date(drive.date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg">
      <h2 className="text-xl font-bold">{drive.company}</h2>

      <p className="text-gray-600 mt-2">Role: {drive.role}</p>

      <p className="text-gray-500 text-sm">Date: 📅{normalTime}</p>

      <p className="text-gray-500 text-sm">
        Min CGPA: {drive.eligibility?.minCGPA}
      </p>

      <div className="flex gap-3 mt-4">
        <Link
          to={`/placements/${drive._id}`}
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default PlacementCard;
