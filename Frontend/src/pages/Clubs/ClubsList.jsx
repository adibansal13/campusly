import { useEffect, useState } from "react";
import { getClubs } from "../../services/clubService";
import ClubCard from "../../components/ClubCard";
import { Link } from "react-router-dom";

function ClubsList() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    getClubs().then(res => {
      setClubs(res.data.data);
    });
  }, []);
  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="col-span-8 flex justify-between">
        <h1 className="text-2xl font-bold ">Clubs</h1>
        <div className="">
          <Link
            to={"/clubs/admin/register"}
            className="bg-blue-500 text-white px-4 py-2 rounded mx-2"
          >
            Register Club Admin
          </Link>
          <Link className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Club
          </Link>
        </div>
      </div>
      {clubs.map(club => (
        <ClubCard key={club._id} club={club} />
      ))}
    </div>
  );
}

export default ClubsList;
