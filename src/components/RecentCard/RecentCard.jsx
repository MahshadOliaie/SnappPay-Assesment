import { useNavigate } from 'react-router-dom'
import CSS from './recentCard.module.css'
import { useContext } from 'react'
import RecentlyVisited from '../../context/RecentlyVisited'

function recentCard({ user }) {
    const Navigate = useNavigate()
    const { name, phone, picture } = user
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
        <>
            <div className={CSS.recentCard} onClick={() => { Navigate('/contact'); recentSetter() }}>
                <div className={CSS.image}>
                    <img src={picture.large} alt="" />
                </div>
                <h3 className={CSS.name}>{userName}</h3>
                <p className={CSS.number}>{phone}</p>
            </div>
        </>
    )
}

export default recentCard