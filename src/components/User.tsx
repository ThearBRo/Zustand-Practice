import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
}

const User = () => {
  const [itemName, setItemName] = useState(""); // State to hold the name input
  const [message, setMessage] = useState(""); // State for success/error messages
  const [itemsList, setItemsList] = useState<User[]>([]); // State to display created items

  const fetchName = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/api/names");
      const data = await res.json();
      console.log(data);
      setItemsList(data);
    } catch (error) {
      console.error("Error in fetching name", error);
      setMessage("Failed Fetching Names");
    }
  };

  const handleSubmit = async () => {
    setMessage("");

    if (!itemName.trim()) {
      setMessage("Field is required");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:3000/api/names", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: itemName }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(
          `Success ${data.message} item: ${data.name} ID: (${data._id})`
        );
        setItemName("");
        fetchName();
      } else {
        setMessage("Something is missing");
      }
    } catch (error) {
      console.error("Error in handlesubmit", error);
    }
  };

  useEffect(() => {
    fetchName();
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
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., My New Product"
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
                <span className="font-medium">{item.name}</span>
                <span className="text-xs text-gray-500">ID: {item.id}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default User;
