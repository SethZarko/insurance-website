// React Imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from "react-router-dom";

// Context Import
import { AppProvider } from './context/AppProvider.jsx'

// Layouts
import { AdminLayout } from "./layouts/AdminLayout.jsx";
import { GuestLayout } from "./layouts/GuestLayout.jsx";

// Admin Pages
import { AdminDashboard } from './pages/AdminDashboard.jsx'

// Guest Pages
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Login } from './pages/Login.jsx'
import { Blog } from './pages/Blog.jsx'
import { BlogPost } from './pages/BlogPost.jsx'
import { Services } from "./pages/Services.jsx";
import { Quote } from "./pages/Quote.jsx";

// Components
import { HomeQuote } from './components/HomeQuote.jsx'
import { AutoQuote } from './components/AutoQuote.jsx'
import { RentersQuote } from './components/RentersQuote.jsx'

// Loader Imports
import { postLoader } from './pages/Blog.jsx';
import { homePostLoader } from './components/HomeBlog.jsx';
import { singlePostLoader } from './pages/BlogPost.jsx';


// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />  
        <Route path='dash' element={<AdminDashboard />} />  
        <Route path='*' element={<NotFound />} />
      </Route>
  
      <Route path='/guest' element={<GuestLayout/>}>
        
        <Route path='home' loader={homePostLoader} element={<Home />}/>
        <Route path='blog' loader={postLoader} element={<Blog/>}/>
        <Route path='post/:id' loader={singlePostLoader} element={<BlogPost/>}/>
        <Route path='services' element={<Services/>}/>

        <Route path='quote' element={<Quote/>}>
          <Route index element={<Navigate to="auto-quote" />} />
          <Route path='home-quote' element={<HomeQuote/>}/>
          <Route path='auto-quote' element={<AutoQuote/>}/>
          <Route path='renters-quote' element={<RentersQuote/>}/>
        </Route>

        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </>
    
  )
);

function App() {

  return (
    <>
      <AppProvider>
        <RouterProvider router={router}/>
      </AppProvider>
    </>
  )
}

export default App