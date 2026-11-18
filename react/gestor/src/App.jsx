import { useState } from "react";
import { tasksApi } from "./services/tasksApi";
import SearchBar from "./components/SearchBar";
import UserGrid from "./components/UserGrid";
import "./App.css";

function App() {
  const { data, loading, error } = tasksApi("https://jsonplaceholder.typicode.com/users");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredUsers = Array.isArray(data)
    ? data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

  return (
    <div className="app-container">
      <div>
        {/* Encabezado */}
        <div className="directory-header">
          <div>
            <h1 className="directory-title">Directorio de usuarios</h1>
            <p className="directory-subtitle">Usuarios obtenidos de una API pública</p>
          </div>
        </div>

        {/* Buscador */}
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Barra de estado: Favoritos y contador */}
        <div className="directory-status">
          <span className="favorites-counter">Favoritos: {favorites.length}</span>
          <span className="visible-counter">
            {loading ? "Cargando..." : `${filteredUsers.length} usuarios visibles`}
          </span>
        </div>

        {/* Estados de carga o error */}
        {loading && <div className="state-message">Cargando usuarios...</div>}
        {error && <div className="state-message error">Error al cargar usuarios</div>}

        {/* Cuadrícula de tarjetas de usuario */}
        {!loading && !error && (
          <UserGrid
            users={filteredUsers}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {!loading && !error && filteredUsers.length === 0 && (
          <div className="state-message">No se encontraron usuarios con ese nombre.</div>
        )}
      </div>
    </div>
  );
}

export default App;
