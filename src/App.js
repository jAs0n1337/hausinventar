import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavComponent from './components/navComponent/NavComponent';
import Data from './data';
import CreateCard from './components/createCard/CreateCard';
import { db } from './Firebase';
import { collection, getDocs, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {

	/* 
	FIREBASE ------------------ Datenbank
	Funktoniert noch nicht.
	Daten aus der Data.js sind alle in Firebase 
	*/
	const ref = collection(db, 'hausinventar');

	const [data, setData] = useState([]);

	const getData = async () => {
		const data = await getDocs(ref);
		console.log(data.docs[0].data());
	}

	const setNewData = async (parameter) => {
		if (parameter && typeof parameter === 'object') {
			addDoc(ref, parameter);
		} else {
			console.error('Invalid data object');
		}
	}

	const updateDate = async (parameter) => {
		const docRef = doc(db, "hausinventar", "furniture")
		const data = await getDoc(docRef)
		await updateDoc(docRef, { ...data.data(), ALLES1: parameter })
	}
	// updateDate({ Bad: "wie geleckt" });

	getData();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getData();
			setData(response);
		};
		fetchData();
	}, []);


	/* ENDE!!!!!!!!! FIREBASE ------------------ Datenbank */


	const bigStuffItems = Data.filter(item => item.typ === "BigStuff");
	const smallStuffItems = Data.filter(item => item.typ === "SmallStuff");
	const notSoBigStuffItems = Data.filter(item => item.typ === "NotSoBigStuff");

	return (
		<div className="App">
			<Router>
				<NavComponent />
				<Routes>
					{/*
					Daten werden aus der Data.js an die Komponenten übergeben.
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
