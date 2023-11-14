import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/404'
import ArticleList from './pages/articleList'
import Article from './pages/article'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/articles'>Articles</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articles' element={<ArticleList />} />
          <Route path='/articles/:articleId' element={<Article />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
