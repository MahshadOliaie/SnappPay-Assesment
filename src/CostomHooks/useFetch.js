import { useEffect, useState } from "react"


function useFetch() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(data => { setUsers(data.results) ; setFilteredUsers(data.results)})

        return () => { };
    }, [])

    return {users , filteredUsers , setFilteredUsers}
}

export default useFetch