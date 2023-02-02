import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavComponent from './components/navComponent/NavComponent';
import CreateCard from './components/createCard/CreateCard';
import { db } from './Firebase';
import { collection, getDocs, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {

	/* 
	FIREBASE ------------------ Datenbank
	Wir bekommen die Daten und können sie anzeigen
	*/

	const ref = collection(db, 'hausinventar');

	const [data, setData] = useState([]);
	console.log(data);

	useEffect(() => {
		const getData = async () => {
			const data = await getDocs(ref);
			const docsData = [];
			data.docs.forEach(doc => {
				console.log(doc.data());
				setData(doc.data().data);
			});
		};
		getData();
	}, []);

	const bigStuffItems = data.filter(item => item.typ === "BigStuff");
	const smallStuffItems = data.filter(item => item.typ === "SmallStuff");
	const notSoBigStuffItems = data.filter(item => item.typ === "NotSoBigStuff");
	// console.log(bigStuffItems);
	// console.log("Hallo", data.length);
	/* ENDE!!!!!!!!! FIREBASE ------------------ Datenbank */

	return (
		<div className="App">
			<Router>
				<NavComponent />
				<Routes>
					{/*
					Daten werden aus Firebase geholt und an die Komponenten übergeben.
					*/}
					<Route path="/" element={<Home />} />
					<Route path="/BigStuff" element={<CreateCard data={bigStuffItems} />} />
					<Route path="/NotSoBigStuff" element={<CreateCard data={notSoBigStuffItems} />} />
					<Route path="/SmallStuff" element={<CreateCard data={smallStuffItems} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
