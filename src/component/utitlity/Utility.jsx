
const Utility = (props) => {
    const time = props.readtime;
    const bookMark = props.bookMark;
    return (
        <div className="w-full flex flex-col gap-5">
            <div className=" bg-emerald-200 px-10 py-8 " >
                <h2 className="font-bold text-2xl">Spent time on read : <span>{time} </span> min</h2>
            </div>
            <div className=" bg-indigo-100 px-10 py-5">
                <h2 className="font-bold text-2xl pb-5">Bookmarked Blogs : <span>{bookMark.length}</span></h2>
                {
                    bookMark.map(data => <p className="font-bold text-md p-3 mb-2 bg-white">{data}</p>)
                }
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Utility;