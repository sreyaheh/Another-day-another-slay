import React from "react";
import ProfileInfo from "./Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";


const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {

    const [searchQuery, setSearchQuery] = React.useState("");
    const navigate = useNavigate();

    // Add this inside your Navbar component
    React.useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
    }, [searchQuery]);

    const onLogout = () => {
        localStorage.clear()
        navigate("/login");
    }

    const onProfile = () => { 
        navigate("/profile");
    }

    const onTasks = () => { 
        navigate("/dashboard");
    }

    const onWellness = () => { 
        navigate("/wellness");
    }

    const onFriends = () => { 
        navigate("/friends");
    }
    
    const onStudy = () => { 
        navigate("/study");
    }

    const onKeyDown = (e) => { 
        if (e.key === 'Enter') { 
            handleSearch();
        }
    }
    

    const handleSearch = () => {
    if (searchQuery.trim() === "") {
        onClearSearch(); // Show all notes when search is empty
    } else {
        onSearchNote(searchQuery);
    }
}

    const onClearSearch = () => {
        setSearchQuery("");
        handleClearSearch(); 
    }
    
    return (
  <div className="bg-yellow-400 backdrop-blur-sm flex items-center justify-between px-6 py-4 drop-shadow w-screen">
    {/* Logo - always visible */}
    <div className="flex flex-row items-center gap-2 md:mb-0">
      <h2 className="text-2xl font-medium text-black">SlayFocus</h2>
      <BiHelpCircle className="text-2xl text-black cursor-pointer hover:text-dark" onClick={() => navigate("/about")} />
    </div>

    {/* Search bar - takes available space on medium+ screens */}
    <div className="w-full md:w-auto md:flex-1 flex items-center justify-center md:px-4 mb-3 md:mb-0">
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        onKeyDown={onKeyDown}
        text="Search Tasks"
      />
    </div>

    {/* Profile section - right-aligned */}
    <div className="flex-shrink-0 mr-5">
      <ProfileInfo
        userInfo={userInfo}
        onLogout={onLogout}
        onProfile={onProfile}
        //onFriends={onFriends}
        onWellness={onWellness}
        onStudy={onStudy}
        onTasks={onTasks}
        //isFriends={location.pathname === "/friends"}
        isWellness={location.pathname === "/wellness"}
        isStudy={location.pathname === "/study"}
        isTasks={location.pathname === "/dashboard"}
        isProfile={location.pathname === "/profile" || location.pathname === "/profile/studyroom" || location.pathname === "/profile/avatar"}
      />
    </div>
  </div>
);
}
export default Navbar;
