import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
      <>
        <BrowserRouter >
          <Routes >
            <Route path='/' element={<div className='text-5xl text-center'>Helping everyone</div>} />

          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
