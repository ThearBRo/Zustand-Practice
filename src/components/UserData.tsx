import { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  summary: string;
}

const UserData = () => {
  const [message, setMessage] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [itemsList, setItemslist] = useState<UserData[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:3000/api/userdatas");
      const data = res.data;
      setItemslist(data);
    } catch (error) {
      console.error("Error in fetching Data", error);
      setMessage("Fail to Fetch Data");
    }
  };

  const handleSubmit = async () => {
    setMessage("");

    if (!firstName.trim() || !lastName.trim() || !summary.trim()) {
      setMessage("All fields are required");
      return;
    }

    try {
      const userData = {
        firstName,
        lastName,
        summary,
      };
      const res = await axios.post(
        "http://127.0.0.1:3000/api/userdatas",
        userData
      );
      const data = await res.data;

      if (res) {
        setMessage(
          `Success ${data.message} item: ${data.name} ID: (${data.id})`
        );
        setFirstName("");
        setLastName("");
        setSummary("");
        fetchData();
      } else {
        setMessage("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create New Item (MERN Data Flow)
        </h1>

        {/* Display messages to the user */}
        {message && (
          <div
            className={`p-3 mb-4 rounded-lg text-sm ${
              message.startsWith("Success")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Form to input new item name */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          {/* <form className="space-y-4 mb-8"> */}
          <div>
            <label
              htmlFor="itemName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Item Name:
            </label>
            <input
              type="text"
              id="itemName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="firstname"
              required
            />
            <input
              type="text"
              id="itemName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="lastname"
              required
            />
            <input
              type="text"
              id="itemName"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="summary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Item
          </button>
        </form>

        {/* Display List of Existing Items */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Existing Items:
        </h2>
        {itemsList.length === 0 ? (
          <p className="text-gray-500 italic">No items yet. Create one!</p>
        ) : (
          <ul className="space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
            {itemsList.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center text-gray-800"
              >
                <span className="font-medium" key={item.id}>
                  {item.firstName}
                </span>
                <span className="font-medium" key={item.id}>
                  {item.lastName}
                </span>
                <span className="font-medium" key={item.id}>
                  {item.summary}
                </span>
                <span className="text-xs text-gray-500" key={item.id}>
                  ID: {item.id}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserData;
