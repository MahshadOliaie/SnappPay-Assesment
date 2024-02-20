import CSS from './card.module.css'

function Card() {
    return (
        <div className={CSS.card}>
            <img src="/public/user.jpeg" alt="" className={CSS.image} />
            <div className={CSS.about}>
            <h3 className={CSS.name}>name</h3>
            <p className={CSS.city}>Tehran</p>
            <p className={CSS.phone}>09210377980</p>
            </div>
        </div>
    )
}

export default Card