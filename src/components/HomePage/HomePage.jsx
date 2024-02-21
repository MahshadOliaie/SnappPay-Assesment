
import ContactsContainer from "../Contactscontainer/ContactsContainer"
import MyHeader from "../MyHeader/MyHeader"
import SearchBar from "../SearchBar/SearchBar"
import useFetch from "../../CostomHooks/useFetch"
import { useState } from "react"


function HomePage() {
    const [inputValue, setInputValue] = useState("")
    const { users , filteredUsers , setFilteredUsers } = useFetch()

    function search() {
        let value = event.target.value
        setInputValue(value)

        let filter = []
        users.map(user => {
            let newName = `${user.name.first} ${user.name.last}`
            if (newName.startsWith(value.toUpperCase())) {
                filter.push(user)
            }
        })

        setFilteredUsers(filter)

    }

    return (
        <>
            <MyHeader />
            <SearchBar onChange={search} users={users} inputValue={inputValue} />
            <ContactsContainer users={users} fileteredUsers={filteredUsers} />
        </>
    )
}

export default HomePage