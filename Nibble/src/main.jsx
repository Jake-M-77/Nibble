import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import Diet from './pages/Diet';
import Query from './pages/Query.jsx';
import Info from './pages/Info.jsx';
import ApiInfo from './pages/ApiInfo.jsx';
import Account from './pages/Account.jsx';
import RecipeDetail from './pages/RecipeDetail.jsx';

import './styles/index.css'
import './styles/reset.css'
import './styles/App.css'
import './styles/layout.css'
import './styles/components/RecipeCard.css'
import './styles/components/Navbar.css'
import './styles/components/Home.css'
import './styles/components/Cuisine.css'
import './styles/components/Query.css'
import './styles/components/Diet.css'
import './styles/components/Info.css'
import './styles/components/apiInfo.css'
import './styles/components/RecipeDetail.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/Cuisine' element={<Cuisine />} />
          <Route path='/Diet' element={<Diet />} />
          <Route path='/Query' element={<Query />} />
          <Route path='/Info' element={<Info />} />
          <Route path='/ApiInfo' element={<ApiInfo />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
        </Route>

      </Routes>
      
      </BrowserRouter>


    
  </StrictMode>,
)
