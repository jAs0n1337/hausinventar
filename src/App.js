import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BigStuff from './pages/BigStuff';
import NavComponent from './components/navComponent/NavComponent';
import Data from './data';

function App() {

	{/* Daten Filtern und an die Komponenten übergeben */ }
	const bigStuffItems = Data.filter(item => item.typ === "BigStuff");
	const smallStuffItems = Data.filter(item => item.typ === "SmallStuff");
	const notSoBigStuffItems = Data.filter(item => item.typ === "NotSoBigStuff");
	{/*================================================================================*/ }
	return (
		<div className="App">
			<Router>
				<NavComponent />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/BigStuff" element={<BigStuff data={bigStuffItems} />} />
					<Route path="/NotSoBig" element={<BigStuff data={notSoBigStuffItems} />} />
					<Route path="/SmallStuff" element={<BigStuff data={smallStuffItems} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
