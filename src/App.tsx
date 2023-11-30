import {Routes, Route} from 'react-router-dom';
import './globals.css';
import Signin from './_auth/forms/Signin';
import Signup from './_auth/forms/Signup';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public routes  */}
            <Route element={< AuthLayout/>}>
                < Route path='/sign-in' element={<Signin />}/>
                < Route path='/sign-up' element={<Signup />}/>
            </Route>
            {/* private routes  */}
            <Route element={< RootLayout/>}>
                < Route index element={<Home />}/>
            </Route>
        </Routes>
    </main>
  )
}

export default App