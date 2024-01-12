function UserList({ users }: any) {
  const renderedUsers = users.map((user: any) => {
    return (
      <ul className="home__list" key={user.name}>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
      </ul>
    );
  });

  return <div>{renderedUsers}</div>;
}

export default UserList;
