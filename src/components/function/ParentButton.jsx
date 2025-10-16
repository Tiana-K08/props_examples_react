import ChildButton from './ChildButton.jsx';

function ParentButton() {
  function handleClick() {
    alert("Кнопка нажата!");
  }

  return (
    <div className='parent-wrapper'>
      <h3>Передача функции-обработчика в props</h3>
      <ChildButton onClick={handleClick} />
    </div>
  );
}

export default ParentButton;