import { useContext } from 'react'
import CSS from './contactMoreInfo.module.css'
import RecentlyVisited from '../../context/RecentlyVisited'

function ContactMoreInfo() {
    const { recentlyVisited } = useContext(RecentlyVisited)
    let currentUser = recentlyVisited[(recentlyVisited.length-1)]
    const { email, location, dob, phone } = currentUser
    let address = `${location.street.number} ${location.street.name} St`
    let d = new Date(dob.date)
    let birthday = d.toLocaleDateString()

    return (
        <>
            <div className={CSS.moreInfo}>
                <div className={CSS.phoneNumber}>
                    <p className={CSS.title}>Mobile</p>
                    <p className={CSS.titleInfo}>{phone}</p>
                </div>
                <div className={CSS.email}>
                    <p className={CSS.title}>Email</p>
                    <p className={CSS.titleInfo}>{email}</p>
                </div>
                <div className={CSS.address}>
                    <p className={CSS.title}>Address</p>
                    <p className={CSS.titleInfo}>{address}</p>
                </div>
                <div className={CSS.birthday}>
                    <p className={CSS.title}>Birthday</p>
                    <p className={CSS.titleInfo}>{birthday}</p>
                </div>
            </div>
        </>
    )
}
export default ContactMoreInfo