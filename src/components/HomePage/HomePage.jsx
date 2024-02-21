
import ContactsContainer from "../Contactscontainer/ContactsContainer"
import MyHeader from "../MyHeader/MyHeader"
import SearchBar from "../SearchBar/SearchBar"
import useFetch from "../../CostomHooks/useFetch"


function HomePage() {
    const {users , filteredUsers} = useFetch()
    return (
        <>
            <MyHeader />
            <SearchBar />
            <ContactsContainer data={filteredUsers} />
        </>
    )
}

export default HomePage