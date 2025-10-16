function ChildProfile(props) {
  return (
    <>
      <p>Имя пользователя: {props.user.firstName}</p>
      <p>Фамилия пользователя: {props.user.lastName}</p>
      <p>Почта пользователя: {props.user.email}</p>
    </>
  );
}

export default ChildProfile;