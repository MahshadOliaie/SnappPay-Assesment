import { useNavigate } from 'react-router-dom'
import CSS from './recentCard.module.css'
import { useContext } from 'react'
import RecentlyVisited from '../../context/RecentlyVisited'

function recentCard({ user }) {
    const Navigate = useNavigate()
    const { name, phone, picture } = user
    const userName = `${name.first} ${name.last}`

    const { setRecentlyVisited } = useContext(RecentlyVisited)

    function recentSetter(){
        setRecentlyVisited((prev) => [...prev , user])
    }
    return (
        <>
            <div className={CSS.recentCard} onClick={() => {Navigate('/contact'); recentSetter()}}>
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