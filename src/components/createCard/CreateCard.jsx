import './CreateCard.css';

const CreateCard = (props) => {

    const { data } = props;
    console.log(data);

    return (
        <section className='createCardSection'>

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
        </section>
    );
}

export default CreateCard;