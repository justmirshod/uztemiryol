import Container from "../../components/Container";

import emblem_icon from "../../assets/icons/gerb.png";
import { flex } from "../../classes";

const services = [
  {
    name: "Yo'lovchi poyezdlar",
    icon: emblem_icon,
  },
  {
    name: "Turistik xizmatlar",
    icon: emblem_icon,
  },
  {
    name: "Reklama xizmatlari",
    icon: emblem_icon,
  },
  {
    name: "Davlat xizmatlari",
    icon: emblem_icon,
  },
  {
    name: "Chiptani qanday sotib olish mumkin?",
    icon: emblem_icon,
  },
  {
    name: "Chiptani qanday qaytarish mumkin?",
    icon: emblem_icon,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-20">
      <Container>
        <h1 className="text-[36px] font-semibold mb-6">Xizmatlar</h1>
        <div className="grid grid-cols-3 gap-10">
          {services?.map((item, index) => (
            <div
              key={index}
              className={`${flex.alignCenter}  shadow-custom1 cursor-pointer py-4 px-3 rounded-md`}
            >
              <img
                src={item.icon}
                width="60px"
                height="60px"
                className="mr-4"
                alt=""
              />
              <p className="text-xl">{item?.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
