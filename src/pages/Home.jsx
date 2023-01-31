import React from 'react'
import { Link } from 'react-router-dom';
import BigStuff from '../assets/img/homeImg/bigStuff.jpeg';
import NotSoBigStuff from '../assets/img/homeImg/notSoBigStuff.jpeg';
import SmallStuff from '../assets/img/homeImg/smallStuff.jpeg';

function Home() {

    return (
        <section className='homeSection'>
            <div className='homeBackground'>
                <h1 className='homeHeading'>Meine Möbel</h1>
            </div>

            {/* Bilder für die 3 Boxen und Beschreibung */}
            <article className='homeArticle'>
                <Link to="/BigStuff">
                    <div className='homeDiv'>
                        <img className='homeImg' src={BigStuff} alt="Big Stuff"></img>
                        <p className='homeDescription'>BIG STUFF</p>
                    </div>
                </Link>

                <Link to="/NotSoBigStuff">
                    <div className='homeDiv'>
                        <img className='homeImg' src={NotSoBigStuff} alt="Big Stuff"></img>
                        <p className='homeDescription'>NOT SO BIG STUFF</p>
                    </div>
                </Link>

                <Link to="/SmallStuff">
                    <div className='homeDiv'>
                        <img className='homeImg' src={SmallStuff} alt="Big Stuff"></img>
                        <p className='homeDescription'>SMALL STUFF</p>
                    </div>
                </Link>

            </article>

        </section>
    )
}

export default Home;