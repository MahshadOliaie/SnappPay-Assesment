import CSS from './card.module.css'

function Card({ user }) {
    const { name, location, phone , picture } = user
    return (
        <div className={CSS.card}>
            <img src={picture.large} alt="" className={CSS.image} />
            <div className={CSS.about}>
                <h3 className={CSS.name}>{`${name.first} ${name.last}`}</h3>
                <p className={CSS.city}>{location.city}</p>
                <p className={CSS.phone}>{phone}</p>
            </div>
        </div>
    )
}

export default Card