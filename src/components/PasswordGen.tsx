import usePasswordStore from "./store/useStore";

const PasswordGen = () => {
  const {
    length,
    setLength,
    includeNumbers,
    toggleNumbers,
    includeSymbles,
    toggleSymbles,
    includeUppers,
    toggleUppers,
    includeLowers,
    toggleLowers,
    generatePassword,
    generatedPassword,
  } = usePasswordStore();

  const handleGeneratePassword = () => generatePassword();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="length"
              className="block text-sm font-medium text-gray-700"
            >
              Password length
            </label>
            <input
              type="number"
              id="length"
              value={length}
              onChange={(e) => setLength(+e.target.value)}
              min={4}
              max={64}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={toggleNumbers}
            />
            <label className="ml-2 text-sm">Include Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbles}
              onChange={toggleSymbles}
            />
            <label className="ml-2 text-sm">Include Symbles</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeUppers}
              onChange={toggleUppers}
            />
            <label className="ml-2 text-sm">Include Uppercase Letters</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowers}
              onChange={toggleLowers}
            />
            <label className="ml-2 text-sm">Include Lowercase Letters</label>
          </div>
          <button
            onClick={handleGeneratePassword}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Generate Password
          </button>
        </div>
        {generatedPassword && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg break-all">{generatedPassword}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGen;
