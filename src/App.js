import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavComponent from './components/navComponent/NavComponent';
import Data from './data';
import CreateCard from './components/createCard/CreateCard';
import AddSomething from './components/addSomething/AddSomething';

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
					<Route path="/BigStuff" element={<CreateCard data={bigStuffItems} />} />
					<Route path="/NotSoBig" element={<CreateCard data={notSoBigStuffItems} />} />
					<Route path="/SmallStuff" element={<CreateCard data={smallStuffItems} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
