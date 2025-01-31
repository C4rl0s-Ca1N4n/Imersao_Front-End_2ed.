import './App.css';
import Header from '../src/componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Main from './componentes/Main/Main';
import Sidebar from './componentes/SideBar/SideBar';


function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
