import Card from '../Card/Card'
import CSS from './contactsContainer.module.css'

function ContactsContainer({ data }) {
    return (
        <div className={CSS.container}>
            {data.map((user, index) => {
                return <Card key={index} user={user} />
            })}
        </div>
    )
}

export default ContactsContainer