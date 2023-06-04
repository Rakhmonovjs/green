import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hero from './component/Hero/Hero';




function App() {
  return (
    <div className='App' >
      <Header/>
      <Hero/>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route>
    //       <Route path={'/'} element={<Header/>}/>
    //       <Route path={'/'} element={<Hero/>}/>

    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
