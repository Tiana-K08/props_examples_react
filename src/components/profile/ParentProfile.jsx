import ChildProfile from './ChildProfile.jsx';

function ParentProfile() {
  const user = {
    firstName: 'Дмитрий',
    lastName: 'Коваленко',
    email: 'test@email.com',
  };

  return (
    <div className='parent-wrapper'>
      <h3>Передача объекта в props</h3>
      <ChildProfile user={user} />
    </div>
  );
}

export default ParentProfile;