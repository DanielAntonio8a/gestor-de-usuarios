import UserCard from "./UserCard";
import "./UserGrid.css";

function UserGrid({ users, favorites, onToggleFavorite }) {
  return (
    <div className="users-grid">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isFavorite={favorites.includes(user.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default UserGrid;
