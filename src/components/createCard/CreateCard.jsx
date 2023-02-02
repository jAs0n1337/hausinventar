import AddSomething from '../addSomething/AddSomething';
import './CreateCard.css';

const CreateCard = (props) => {
    /*
    Daten werden von der App.js an diese Komponente übergeben. Dann werden die props in data gespeichert. Über data kann gemapt werden
    */

    const { data } = props;

    return (
        <section className='createCardSection'>
            <article className='createCardArticle'>
                {data.map((item, key) => (
                    <div key={key} className='createCardDiv'>
                        <div className='createCardImgDiv'>
                            <img className='createCardImg' src={item.img} alt={item.name} />
                        </div>
                        <div className='createCardText'>
                            <h2 className='createCardHeading'>{item.name}</h2>
                            <p className='createCardRoom'>{item.room}</p>
                            <p className='createCardDescription'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </article>
            <AddSomething />
        </section>
    );
}

export default CreateCard;