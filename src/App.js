import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hero from './component/Hero/Hero';
import Content from './component/Content/Content';




function App() {
  return (
    <div className='App' >
      <Header/>
      <Hero/>
      <Content/>
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
