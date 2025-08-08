const User = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <p>
      {props.email}
      </p>
    </>
  );
};

export default User;
