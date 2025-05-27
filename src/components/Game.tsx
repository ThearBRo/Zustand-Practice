import { useState } from "react";
import { useGameStore } from "./store/useStore";

interface Game {
  id: number;
  game: string;
  genre: string[];
  country: string;
}

const Game = () => {
  const { games, addGame, removeGame } = useGameStore();
  const [game, setGame] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [editGame, setEditGame] = useState<Game | null>(null);

  const handleUpdateGame = () => {
    if (game.trim() == "" || genre.trim() == "" || country.trim() == "") {
      return;
    }

    if (editGame) {
      removeGame(editGame.id);
      addGame({
        id: Date.now(),
        game,
        genre: genre.split(",").map((genre) => genre.trim()),
        country,
      });
      setGame("");
      setGenre("");
      setCountry("");
    }
  };

  const handleCancelGame = () => {
    setEditGame(null);
    setGame("");
    setGenre("");
    setCountry("");
  };

  const handleAddGame = () => {
    if (game.trim() == "" || genre.trim() == "" || country.trim() == "") {
      return;
    }

    addGame({
      id: Date.now(),
      game,
      genre: genre.split(",").map((genre) => genre.trim()),
      country,
    });

    setGame("");
    setGenre("");
    setCountry("");
  };

  const handleEditGame = (game: Game) => {
    setEditGame(game);
    setGame(game.game);
    setGenre(game.genre.join(", "));
    setCountry(game.country);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-blue-300">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
            Game Store
          </h1>
          <div className="space-y-4 mb-4">
            <input
              type="text"
              value={game}
              onChange={(e) => setGame(e.target.value)}
              placeholder="Game title"
              className="w-full px-4 py-2 border rounded-lg border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Type and Genre"
              className="w-full px-4 py-2 border rounded-lg border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              className="w-full px-4 py-2 border rounded-lg border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between">
              {editGame ? (
                <div>
                  <button
                    onClick={handleUpdateGame}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Update Game
                  </button>

                  <button
                    onClick={handleCancelGame}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAddGame}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Add Game
                </button>
              )}
            </div>
          </div>
          <ul className="space-y-4">
            {games.map((game) => (
              <li className="p-4 bg-green-50 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-green-80 mb-2">
                  {game.game}
                </h2>
                <p className="text-gray-700 mb-2">
                  <strong>Genre: </strong> {game.genre.join(", ")}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEditGame(game)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => removeGame(game.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Game;
