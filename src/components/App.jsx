import ParentGreeting from './greeting/ParentGreeting.jsx';
import ParentProfile from './profile/ParentProfile.jsx';
import ParentProfileDest from './destructuring/ParentProfileDest.jsx';
import ParentButton from './function/ParentButton.jsx';
import ParentCards from './children/ParentCards.jsx';
import ParentCardOne from './children/ParentCardOne.jsx';
import ParentCardTwo from './children/ParentCardTwo.jsx';
import ParentCardThree from './children/ParentCardThree.jsx';

function App() {
  return (
    <>
      <ParentGreeting />
      <ParentProfile />
      <ParentProfileDest />
      <ParentButton />
      <ParentCards />
      <ParentCardOne />
      <ParentCardTwo />
      <ParentCardThree />
    </>
  );
}

export default App;
