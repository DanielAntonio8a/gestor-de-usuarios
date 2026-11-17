import { useState } from "react";
import { tasksApi } from "./services/tasksApi";
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
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar usuario por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

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
          <div className="users-grid">
            {filteredUsers.map((user) => {
              const isFavorite = favorites.includes(user.id);
              return (
                <div key={user.id} className="user-card">
                  <h2 className="user-name">{user.name}</h2>
                  <p className="user-email">{user.email}</p>
                  <p className="user-location">
                    <svg
                      className="location-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{user.address?.city || "Sin ciudad"}</span>
                  </p>
                  <button
                    type="button"
                    className={`favorite-btn ${isFavorite ? "active" : ""}`}
                    onClick={() => toggleFavorite(user.id)}
                  >
                    <span className="star-icon">{isFavorite ? "★" : "☆"}</span>
                    <span>Favorito</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {!loading && !error && filteredUsers.length === 0 && (
          <div className="state-message">No se encontraron usuarios con ese nombre.</div>
        )}
      </div>
    </div>
  );
}

export default App;
