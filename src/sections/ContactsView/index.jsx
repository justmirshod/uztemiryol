import { flex } from "../../classes";
import Container from "../../components/Container";

const contactDetails = [
  {
    title: "Murojaat uchun telefon",
    detail: "1005",
  },
  {
    title: "Faks",
    detail: "+998 (71) 237-86-36",
  },
  {
    title: "Elektron pochta",
    detail: "uzexpress@info.uz",
  },
];

const contactWithManagers = [
  {
    role: "Bosh direktor",
    days: ["Dushanba"],
    time: "16:00 - 17:00",
  },
  {
    role: "Ishlab chiqarish va texnik rivojlantirish bo'yicha direktor",
    days: ["Dushanba", "Chorshanba"],
    time: "16:00 - 17:00",
  },
  {
    role: "Marketing, sotuvlar va servis xizmatlari bo'yicha direktor",
    days: ["Seshanba", "Payshanba"],
    time: "16:00 - 17:00",
  },
];

export default function ContactsView() {
  return (
    <>
      <Container className="pt-20 pb-32">
        <h1 className="text-[32px] mb-6">Bog'lanish</h1>
        <div className="grid grid-cols-3 gap-20">
          {contactDetails?.map((item, index) => (
            <div
              key={index}
              className={`${flex.center} border h-[150px] text-xl text-white font-semibold bg-[#12A3FA] rounded-[24px] shadow-lg hover:shadow-2xl duration-150`}
            >
              {item.title} : {item.detail}
            </div>
          ))}
        </div>{" "}
        +998 (99) 211-35-26
        <h1 className="text-center text-[#336699] text-2xl mb-10 mt-20">
          "O'ztemiryo'lyo'lovchi" AJ rahbariyatining qabul kunlari
        </h1>
        <div className="grid grid-cols-3 rounded-2xl shadow-custom1">
          {contactWithManagers?.map((item, index, arr) => (
            <div
              key={index}
              className={`${
                index !== arr?.length - 1 ? "border-r" : null
              } py-6 px-10`}
            >
              <p className="text-lg font-medium mb-2">{item?.role}</p>
              <p className="font-medium mb-2 py-3">
                Kun: {item?.days?.join(" va ")}
              </p>
              <p className="font-medium mb-2">Soat: {item?.time}</p>
            </div>
          ))}
        </div>
        <p className="text-xl mt-10">
          "Temiryo'lekspress" AJ ma'lumotxonasining telefon raqami:{" "}
          <span className="font-medium inline-block ml-4">
            {" "}
            +998 (99) 211-35-26
          </span>
        </p>
        <div className="grid grid-cols-2 border p-10 bg-white shadow-custom1">
          <div className="">
            <h1 className="text-xl font-normal">Bizga murojaat jo'nating</h1>
            <form action="" className="mt-6">
              <label htmlFor="name">F.I.SH</label>
              <input
                type="text"
                className="block border p-3 rounded-lg w-[400px]"
              />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
