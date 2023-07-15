import AllBook from '../../components/books/AllBook';

const AllBooks = () => {
  return (
    <div className="view-part mx-auto my-16">
      <div className="flex gap=2 sm:flex-nowrap flex-wrap">
        <div className="sm:border-r-[1px] px-4 mx-auto">
          <div className="mb-10">
            <input
              placeholder="search here"
              type="text"
              className="border py-[6px] px-2 text-base "
            />
            <button className="px-3 py-1 border rounded-sm leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary">
              Search
            </button>
          </div>

          <hr />
          <div className="mb-5">
            <h1 className="text-[15px]  my-2 font-semibold">Genre</h1>
            <select className="input border w-[200px] py-[6px] px-2 text-sm ">
              <option value="volvo"></option>
              <option value="volvo">Volvo dfgsdgsdfh</option>
              <option value="saab">Saab</option>
              <option value="vw">VW</option>
            </select>
          </div>
          <div className="mb-5">
            <h1 className="text-[15px]  my-2 font-semibold">Published Year</h1>
            <select className="input border w-[200px] py-[6px] px-2 text-sm ">
              <option value="volvo"></option>
              <option value="volvo">Volvo dfgsdgsdfh</option>
              <option value="saab">Saab</option>
              <option value="vw">VW</option>
            </select>
          </div>
          <button className="px-3 py-1 border rounded-sm leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary">
            Filter
          </button>
        </div>
        <div className="mx-auto">
          <AllBook></AllBook>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
