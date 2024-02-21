import { useNavigate } from 'react-router-dom'
import CSS from './card.module.css'
import { useContext } from 'react'
import RecentlyVisited from '../../context/RecentlyVisited'

function Card({ user }) {
    const Navigate = useNavigate()
    const { name, location, phone, picture } = user
    const userName = `${name.first} ${name.last}`

    const { recentlyVisited, setRecentlyVisited } = useContext(RecentlyVisited)

    function recentSetter() {
        let array = [...recentlyVisited]
        array.map((item, index) => {
            if (item == user) {
                array.splice(index, 1)
            }
        })
        array = [...array, user]
        setRecentlyVisited(array.reverse().slice(0, 4).reverse())
    }

    return (
        <div className={CSS.card} onClick={() => { Navigate(`/contact`); recentSetter() }}>
            <div className={CSS.image}>
                <img src={picture.large} alt="" />
            </div>
            <div className={CSS.about}>
                <h3 className={CSS.name}>{userName}</h3>
                <p className={CSS.city}>{location.city}</p>
                <p className={CSS.phone}>{phone}</p>
            </div>
        </div>
    )
}

export default Card