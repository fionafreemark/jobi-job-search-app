// Components
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';



// Styles
import './App.scss';

function App() {
  return (
<>
{/* If url = home display <HeaderHome>, if not display <header> */}
<Header />
<Main />
<Footer />
</>
  );
}

export default App;
