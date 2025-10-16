import ChildGreeting from './ChildGreeting.jsx';

function ParentGreeting() {
  let userName = 'Дмитрий';

  return (
    <div className='parent-wrapper'>
      <h3>Передача данных в props через атрибут компонента</h3>
      <p>Передача значения props из переменной</p>
      <ChildGreeting userName={userName} />
      <p>Передача значения props напрямую (строкой)</p>
      <ChildGreeting userName='Екатерина' />
    </div>
  );
}

export default ParentGreeting;