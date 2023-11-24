import { useState } from "react";
import Cards from "../cards/Cards";
import Utility from "../utitlity/Utility";

const MainBody = () => {
    const [minute,setMinute] = useState(0);
    const [bookmark,setBookmark] = useState([]);
    const addMinute = (id) => {
       setMinute(minute+id)
    }
    const bookMark = (id) =>
    {
        // console.log(id);
        const allBookMark = [...bookmark,id]
        setBookmark(allBookMark);
    }
    return (
        <div className="flex flex-col lg:flex-row md:mx-12 lg:mx-36 gap-6 my-5 ">
            <div className="lg:w-[60%] py-5 px-5">
                <Cards btn1={addMinute} bookMark={bookMark}></Cards>
            </div>
            <div>
                <Utility readtime={minute} bookMark={bookmark}></Utility>
            </div>
        </div>
    );
};

export default MainBody;