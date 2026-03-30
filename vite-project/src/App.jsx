
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/Homepage'
import DefaultLayout from './layouts/DefaultLayout'
import FilmPage from './pages/Film'

function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout></DefaultLayout>}>
                        <Route path="/" Component={HomePage}></Route>
                        <Route path="/Film" Component={FilmPage}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
