import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/utils/Header';
import { Section } from './routers/sectionRoutes';
function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
         {Section.map((section,i)=>(
           <Route element={section.element} path={section.path} key={i}/>
         ))}
      </Routes>
   </BrowserRouter>
  );
}

export default App;
