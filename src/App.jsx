import Header from './components/Header/Header';
import Card from './components/Card/Card';
import './App.css';

function App() {
  return (
    <div className='container'>
      <section className='layout-card'>
        <Header />
        <Card />
      </section>
    </div>
  );
}

export default App;
