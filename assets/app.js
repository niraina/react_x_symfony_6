import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ArticlesPages from './components/ArtilcesPage';
import NoPage from './components/404';
import CreateArticle from './components/articles/CreateArticle';

const App = () => {
    return <>
        <HashRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles" element={<ArticlesPages />} />
                <Route path="/articles/new" element={<CreateArticle />} />
                <Route path="*" element={<NoPage />} />
            </Routes> 
        </HashRouter>
    </>
}

const rootElement = document.querySelector('#app')
ReactDOM.render(<App/>, rootElement)