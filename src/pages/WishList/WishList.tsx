import WishedBooks from '../../components/wishList/WishedBooks';

const WishList = () => {
  return (
    <div>
      {' '}
      <div className="view-part mx-auto my-16">
        <div className="flex gap=2 sm:flex-nowrap flex-wrap">
          <div className="sm:border-r-[1px] px-4 mx-auto">
            <div className="mb-5">
              <h1 className="text-[15px]  my-2 font-semibold">Status</h1>
              <select className="input border w-[200px] py-[6px] px-2 text-sm ">
                <option value="volvo"></option>
                <option value="volvo">Volvo dfgsdgsdfh</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
              </select>
            </div>
          </div>
          <div className="mx-auto">
            <WishedBooks></WishedBooks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
