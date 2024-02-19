import Card from '../Card/Card'
import CSS from './contactsContainer.module.css'

function ContactsContainer() {
    return (
        <div className={CSS.container}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default ContactsContainer