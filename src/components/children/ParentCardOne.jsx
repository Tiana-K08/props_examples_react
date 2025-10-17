import ChildCards from './ChildCards.jsx';

function ParentCardOne() {
  return (
    <div className='parent-wrapper'>
      <h3>Передача содержимого отдельного компонента в обертку</h3>
      <ChildCards>
        <h3>Название первого товара</h3>
        <p>Описание первого товара</p>
      </ChildCards>
    </div>
  );
}

export default ParentCardOne;