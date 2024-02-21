import Card from '../Card/Card'
import Skeleton from '../Skeleton/Skeleton'
import CSS from './contactsContainer.module.css'

function ContactsContainer({ users, fileteredUsers }) {
    return (
        <div className={CSS.container}>
            {(users.length > 0) ?
                fileteredUsers.map((user, index) => {
                    return <Card key={index} user={user} />
                })
                :
                [...new Array(20)].map((user, index) => {
                    return <Skeleton key={index} />
                })
            }
        </div>
    )
}

export default ContactsContainer