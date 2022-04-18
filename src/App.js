import './App.css';
import Header, {TextContent} from './components/Header';
import Footer from './components/Footer';
import Contents from './components/Contents';

function App() {
  return (
    <div className="App">
      <Header />
      <div align='center'>
          <TextContent />
      </div>
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
