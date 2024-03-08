import './App.css';
import MainPage from './components/MainPage/MainPage';
import UploadPage from './components/UploadPage/UploadPage';
import data from './data/data.json';

function App() {
  return (
    // <UploadPage/>
    <div>
      <MainPage
        data={data}
      />
    </div>
  );
}

export default App;
