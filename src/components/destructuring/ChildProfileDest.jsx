// function ChildProfileDest({ user }) {
//   return (
//     <>
//       <p>Имя пользователя: {user.firstName}</p>
//       <p>Фамилия пользователя: {user.lastName}</p>
//       <p>Почта пользователя: {user.email}</p>
//     </>
//   );
// }



// function ChildProfileDest({ user }) {
//   const { firstName, lastName, email } = user;

//   return (
//     <>
//       <p>Имя пользователя: {firstName}</p>
//       <p>Фамилия пользователя: {lastName}</p>
//       <p>Почта пользователя: {email}</p>
//     </>
//   );
// }



function ChildProfileDest({ user: { firstName, lastName, email } }) {
  return (
    <>
      <p>Имя пользователя: {firstName}</p>
      <p>Фамилия пользователя: {lastName}</p>
      <p>Почта пользователя: {email}</p>
    </>
  );
}

export default ChildProfileDest;