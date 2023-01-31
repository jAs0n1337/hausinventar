import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BigStuff from './pages/BigStuff';
import SmallStuff from './pages/SmallStuff';
import NotSoBig from './pages/NotSoBig';
import NavComponent from './components/navComponent/NavComponent';

function App() {

	return (
		<div className="App">
			<Router>
				<NavComponent />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/BigStuff" element={<BigStuff />} />
					<Route path="/NotSoBig" element={<NotSoBig />} />
					<Route path="/SmallStuff" element={<SmallStuff />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
