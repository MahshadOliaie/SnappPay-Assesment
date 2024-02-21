import { createContext } from "react";


const RecentlyVisited = createContext({
    recentlyVisited: [],
    setRecentlyVisited: () => { }
});

export default RecentlyVisited;