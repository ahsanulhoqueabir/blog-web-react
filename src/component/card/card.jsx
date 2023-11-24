import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    const {ID,authorName,blogTitle,blogCover,authorImage,readTime,publishDate,tag}=props.data;
    const addMinute = props.btn1.btn1;
    const bookMark = props.btn1.bookMark;
    // console.log(bookMark);
 return (
    <>
      <div className="card my-7  card-compact w-full bg-blue-100 border-b-2 border-black">
        <figure>
         <img className="h-80 w-full" src={blogCover} alt={ID} />
        </figure>
        <div className="card-body">
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div>
                <img className="rounded-full h-14 w-14" src={authorImage} alt={authorName} />
                </div>
                <div>
                    <p className="font-bold font-2xl">{authorName}</p>
                    <p>{publishDate} </p>
                </div>
            </div>
            <div>
                <p><span>{readTime<10? ('0'+readTime) : readTime}</span> min read &nbsp; <span onClick={()=>{bookMark(blogTitle)}} className='cursor-pointer'><FontAwesomeIcon icon={faBookmark}/> </span> </p>
            </div>
         </div>
         <div className='my-4'>
            <p className='font-bold text-2xl'>{blogTitle} </p>
            <p className='py-3'>{tag} </p>
            <p onClick={()=>{addMinute(readTime)}} className='text-blue-500 cursor-pointer'>Marks As Read</p>
         </div>
        </div>
      </div>
    </>
  );
};

export default Card;
