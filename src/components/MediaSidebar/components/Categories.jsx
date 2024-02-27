import PropTypes from "prop-types";

export default function Categories({ elements = [] }) {
  return (
    <div className="widget categories-widget pt-14">
      <div className="flex gap-1 justify-center">
        <div className="w-2 h-[0.125rem] bg-[#0459c4]"></div>
        <div className="w-9 h-[0.125rem] bg-[#0459c4]"></div>
        <div className="w-2 h-[0.125rem] bg-[#0459c4]"></div>
      </div>
      <p className="text-[1.25rem] leading-[1.6] font-semibold text-center pt-[1rem]">
        Kategoriyalar
      </p>
    </div>
  );
}

Categories.PropTypes = {
  elements: PropTypes.array.isRequired,
};
