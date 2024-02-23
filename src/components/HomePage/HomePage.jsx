
import ContactsContainer from "../Contactscontainer/ContactsContainer"
import MyHeader from "../MyHeader/MyHeader"
import SearchBar from "../SearchBar/SearchBar"
import useFetch from "../../CostomHooks/useFetch"
import { useState } from "react"
import RecentVisited from "../RecentVisited/RecentVisited"


function HomePage() {
    const [inputValue, setInputValue] = useState("")
    const { users, filteredUsers, setFilteredUsers } = useFetch()

    function search() {
        let value = event.target.value
        setInputValue(value)

        let filter = []

        if (value.match(/\d/)) {
            users.map(user => {
                if (user.phone.startsWith(value)) {
                    filter.push(user)
                }
            })

        }
        else {
            users.map(user => {
                let newName = `${user.name.first} ${user.name.last}`
                if (newName.startsWith(value.toUpperCase())) {
                    filter.push(user)
                }
            })
        }
        setFilteredUsers(filter)

    }

    return (
        <>
            <MyHeader />
            <SearchBar onChange={search} users={users} inputValue={inputValue} />
            <RecentVisited />
            <ContactsContainer users={users} fileteredUsers={filteredUsers} />
        </>
    )
}

export default HomePage