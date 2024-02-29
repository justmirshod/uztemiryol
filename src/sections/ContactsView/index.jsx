import { useTranslation } from "react-i18next";
import { flex } from "../../classes";
import Container from "../../components/Container";
import GeneralMap from "../../components/Map";

export default function ContactsView() {
  const { t } = useTranslation();

  const contactDetails = [
    {
      title: t("phone_for_apply"),
      detail: "1005",
    },
    {
      title: t("fax"),
      detail: "+998 (71) 237-86-36",
    },
    {
      title: t("email"),
      detail: "uzexpress@info.uz",
    },
  ];

  const contactWithManagers = [
    {
      role: t("head_director"),
      days: ["Dushanba"],
      time: "16:00 - 17:00",
    },
    {
      role: t("producing_director"),
      days: ["Dushanba", "Chorshanba"],
      time: "16:00 - 17:00",
    },
    {
      role: t("marketing_director"),
      days: ["Seshanba", "Payshanba"],
      time: "16:00 - 17:00",
    },
  ];

  return (
    <>
      <Container className="pt-20 pb-32">
        <h1 className="text-[32px] mb-6">{t("contact")}</h1>
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
        <h1 className="text-center text-[#336699] text-2xl mb-10 mt-20">
          {t("apply_dates")}
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
                {t("day")}: {item?.days?.join(" va ")}
              </p>
              <p className="font-medium mb-2">
                {t("time")}: {item?.time}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xl mt-10 mb-32">
          {t("apply_dates")}
          <span className="font-medium inline-block ml-4">
            {" "}
            +998 (99) 211-35-26
          </span>
        </p>
        <div className="grid grid-cols-3 p-10 bg-white shadow-custom1 rounded-xl mt-10 gap-24">
          <div className="col-span-1">
            <h1 className="text-2xl font-normal">{t("send_us_request")}</h1>
            <form action="" className="mt-6">
              <div className="mb-8">
                <label htmlFor="name" className="block mb-2 text-lg">
                  {t("fullname")}
                </label>
                <input
                  type="text"
                  className="block border p-3 rounded-lg w-full"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="block mb-2 text-lg">
                  {t("phone")}
                </label>
                <input
                  type="number"
                  className="block border p-3 rounded-lg w-full"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="block mb-2 text-lg">
                  {t("apply")}
                </label>
                <textarea
                  type="email"
                  rows={10}
                  className="block border p-3 rounded-lg w-full"
                />
              </div>
              <button className="px-10 py-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-white uppercase duration-150">
                {t("send")}
              </button>
            </form>
          </div>
          <div className="col-span-2">
            <GeneralMap />
          </div>
        </div>
      </Container>
    </>
  );
}
