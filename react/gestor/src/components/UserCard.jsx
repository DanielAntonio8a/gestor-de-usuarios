import "./UserCard.css";

function UserCard({ user, isFavorite, onToggleFavorite }) {
  return (
    <div className="user-card">
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
        onClick={() => onToggleFavorite(user.id)}
      >
        <span className="star-icon">{isFavorite ? "★" : "☆"}</span>
        <span>Favorito</span>
      </button>
    </div>
  );
}

export default UserCard;
