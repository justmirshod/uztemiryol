import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/blog.slice";

export default function Search() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(setSearch(formData.get("search")));
  };

  return (
    <div className="widget widget-search">
      <form className="relative" onSubmit={handleSubmit}>
        <input
          className="w-full h-[50px] leading-[1.7] text-[16px] pl-5 pr-12 border-0 outline-none font-normal mb-0 rounded-0 shadow-cardShadow"
          type="text"
          name="search"
          placeholder="Qidiruv..."
        />
        <button
          type="submit"
          className="absolute top-0 right-0 w-[50px] h-[50px] grid place-items-center cursor-pointer hover:bg-black hover:text-white duration-500"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
