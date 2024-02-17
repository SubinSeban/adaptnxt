
const Orderpopup = ({ selectedContent }) => {
  return (
    <div className="text-md absolute left-36 flex p-2 bg-white">
      <h4 className="mr-2 hover:text-sky-500 text-sky-500">{selectedContent}</h4>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-4 h-4 text-gray-500" 
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
  );
};
export default Orderpopup;