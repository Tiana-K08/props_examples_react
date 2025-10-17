import ChildCards from './ChildCards.jsx';

function ParentCardTwo() {
  return (
    <div className='parent-wrapper'>
      <h3>Передача содержимого отдельного компонента в обертку</h3>
      <ChildCards>
        <h3>Название второго товара</h3>
        <p>Описание второго товара</p>
      </ChildCards>
    </div>
  );
}

export default ParentCardTwo;