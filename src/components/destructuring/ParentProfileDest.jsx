import ChildProfileDest from './ChildProfileDest.jsx';

function ParentProfileDest() {
  const user = {
    firstName: 'Ольга',
    lastName: 'Ткаченко',
    email: 'test@email.com',
  };

  return (
    <div className='parent-wrapper'>
      <h3>Деструктуризация props</h3>
      <ChildProfileDest user={user} />
    </div>
  );
}

export default ParentProfileDest;