
import { useContext } from 'react'
import CSS from './recentVisited.module.css'
import RecentlyVisited from '../../context/RecentlyVisited'
import RecentCard from '../RecentCard/RecentCard'

function RecentVisited(){
    const { recentlyVisited } = useContext(RecentlyVisited)
    return(
        <>
        <div className={CSS.recentUsers}>
            {recentlyVisited.map(user => {
                return <RecentCard user={user}/>
            })}
        </div>
        </>
    )
}

export default RecentVisited