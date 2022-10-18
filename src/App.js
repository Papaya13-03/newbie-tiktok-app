import './App.css';
import Header from './components/Header/header';
import Container from './components/Container/container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upload from './components/Upload/Upload';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{
        display:"flex",
        justifyContent:"center",
        paddingTop: "60px"
      }}
      >
        <Routes >
          <Route path='/' element={<Container/>} />
          <Route path='/upload' element={<Upload/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );  
}

export default App;
