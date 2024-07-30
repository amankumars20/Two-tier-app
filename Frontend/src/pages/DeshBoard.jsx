import { useState } from "react";
import { backend_url } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Dashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [problem, setProblem] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, number, problem, description);
    try {
      const response = await axios.post(`${backend_url}/api/v1/Enter_data`, {
        name: name,
        email: email,
        number: number,
        problem: problem,
        description: description
      });
      console.log(response.data);
      alert("submitted");
      navigate("/Submition");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">Get in Touch with Us</h2>
      <p className="text-lg text-green-400 mb-6">Fill out the form below to send us a message. We'll get back to you as soon as possible.</p>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input onChange={e => setName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-12"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input onChange={e => setEmail(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-12"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input onChange={e => setNumber(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-12"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="problem" className="block text-gray-700 text-sm font-bold mb-2">
            Problem:
          </label>
          <input onChange={e => setProblem(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-12"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea onChange={e => setDescription(e.target.value)}
            id="description"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-24"
            rows="6"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
