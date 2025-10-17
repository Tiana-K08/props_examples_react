import ChildCards from './ChildCards.jsx';

function ParentCards() {
  return (
    <div className='parent-wrapper'>
      <h3>Передача содержимого компонента в обертку</h3>
      <ChildCards>
        <h3>Название первого товара</h3>
        <p>Описание первого товара</p>
      </ChildCards>

      <ChildCards>
        <h3>Название второго товара</h3>
        <p>Описание второго товара</p>
      </ChildCards>

      <ChildCards>
        <h3>Название третьего товара</h3>
        <p>Описание третьего товара</p>
      </ChildCards>
    </div>
  );
}

export default ParentCards;