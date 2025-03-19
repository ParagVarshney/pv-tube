import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Use BrowserRouter
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './utils/store';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchResults from './Components/SearchResults';

function App() {
  return (
    <Provider store={store}>
      <Router>  {/* ✅ Wrap in BrowserRouter */}
        <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<MainContainer />} />
            <Route path="watch" element={<WatchPage />} />
            <Route path="results/:query" element={<SearchResults />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
