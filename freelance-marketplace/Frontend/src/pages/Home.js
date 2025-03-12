import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/jobSlice";
import { fetchUsers } from "../redux/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);
  const { totalUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchUsers()); // Fetch total users
  }, [dispatch]);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-6">Find Freelance Jobs</h1>
      <p className="text-center text-lg mb-4">Total Users: {totalUsers}</p>
      <div className="grid grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p className="text-gray-300">{job.description}</p>
            <p className="text-green-400 mt-2">${job.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
