import Container from "../../components/Container";

//icons
import train_icon from "../../assets/icons/train.png";
import { flex } from "../../classes";

const achievements = [
  {
    title: "Poyezdlar",
    number: 6,
    icon: train_icon,
  },
  {
    title: "Poyezdlar",
    number: 6,
    icon: train_icon,
  },
  {
    title: "Poyezdlar",
    number: 6,
    icon: train_icon,
  },
  {
    title: "Poyezdlar",
    number: 6,
    icon: train_icon,
  },
];

export default function Achievements() {
  return (
    <div className="bg-gray-500/80">
      <Container className="py-20">
        <h1 className="text-[32px] font-medium mb-10 text-white">
          Bizning yutuqlar
        </h1>
        <div className="grid grid-cols-4 gap-10">
          {achievements?.map((item, index) => (
            <div
              className="shadow-cardShadow bg-white rounded-md py-6 px-10"
              key={index}
            >
              <div className={`${flex.alignCenter} justify-between mb-4`}>
                <p className="text-xl">{item?.title}</p>
                <img src={item?.icon} width={60} height={60} alt="" />
              </div>
              <p className="text-2xl">{item?.number}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
