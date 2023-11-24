const Header = () => {
  return (
    <>
      <div className=" flex justify-between items-center bg-blue-100 px-10 py-3">
        <div className="">
            <a className="btn btn-ghost text-xl">AI Blog</a>
        </div>
        <div className="h-[3%] w-[3%]">
             <img className="rounded-full " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>           
      </div>
    </>
  );
};

export default Header;
