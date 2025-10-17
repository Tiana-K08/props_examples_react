import ChildCards from './ChildCards.jsx';

function ParentCardThree() {
  return (
    <div className='parent-wrapper'>
      <h3>Передача содержимого отдельного компонента в обертку</h3>
      <ChildCards>
        <h3>Название третьего товара</h3>
        <p>Описание третьего товара</p>
      </ChildCards>
    </div>
  );
}

export default ParentCardThree;