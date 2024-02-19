
import ContactsContainer from "../Contactscontainer/ContactsContainer"
import MyHeader from "../MyHeader/MyHeader"
import SearchBar from "../SearchBar/SearchBar"


function HomePage() {
    return (
        <>
            <MyHeader />
            <SearchBar />
            <ContactsContainer />
        </>
    )
}

export default HomePage