interface UserProps {
  users: {
    name: string;
    email: string;
  }[];
}

const UserList: React.FC<UserProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <ul className="home__list" key={user.name}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
      <h2>All Users:</h2>
      <ol data-testid="users">
        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
