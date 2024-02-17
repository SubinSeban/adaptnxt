const Orderinfo = ({ selectedContent })=>{
    return(
        <div className="absolute left-36 top-36">
            <ul className="flex ">
            {selectedContent && <li className=" mx-5 pb-2 hover:text-sky-500 text-sky-500 border-blue-500 border-b-2 hover:border-blue-500 hover:border-b-2">Pending</li>}
                <li className=" mx-5  hover:text-sky-500   hover:border-blue-500 hover:border-b-2">Accepted</li>
                <li className=" mx-5 hover:text-sky-500   hover:border-blue-500 hover:border-b-2">AWB created</li>
                <li className=" mx-5 hover:text-sky-500  hover:border-blue-500 hover:border-b-2">Ready to ship</li>
                <li className=" mx-5 hover:text-sky-500  hover:border-blue-500 hover:border-b-2">Shipped</li>
                <li className=" mx-5 hover:text-sky-500  hover:border-blue-500 hover:border-b-2">Completed</li>
                <li className=" mx-5 hover:text-sky-500   hover:border-blue-500 hover:border-b-2">Cancelled</li>
            </ul>
        </div>
    )
};
export default Orderinfo;