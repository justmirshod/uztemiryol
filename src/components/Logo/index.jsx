import logo_img from "../../assets/icons/logo.webp";

export default function Logo({ className }) {
  return (
    <img
      src={logo_img}
      width="80px"
      height="96px"
      alt=""
      className={className}
    />
  );
}
