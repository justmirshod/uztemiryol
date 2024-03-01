import { Fragment, useEffect } from "react";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById } from "../../api/category";

const vacancies = [
  {
    name: "Dizayner",
    expire: "29.08.2024",
    employment_type: "1 stavka",
    reqs: [
      "Tegishli yo‘nalish bo‘yicha oliy ma’lumot",
      "Ish staji talab etilmaydi",
      "Axborot-kommunikatsiya texnologiyalaridan foydalanishni bilishi",
      "O'zbek va rus tillarini bilishi",
    ],
  },
  {
    name: "Dizayner",
    expire: "29.08.2024",
    employment_type: "1 stavka",
    reqs: [
      "Tegishli yo‘nalish bo‘yicha oliy ma’lumot",
      "Ish staji talab etilmaydi",
      "Axborot-kommunikatsiya texnologiyalaridan foydalanishni bilishi",
      "O'zbek va rus tillarini bilishi",
    ],
  },
  {
    name: "Dizayner",
    expire: "29.08.2024",
    employment_type: "1 stavka",
    reqs: [
      "Tegishli yo‘nalish bo‘yicha oliy ma’lumot",
      "Ish staji talab etilmaydi",
      "Axborot-kommunikatsiya texnologiyalaridan foydalanishni bilishi",
      "O'zbek va rus tillarini bilishi",
    ],
  },
];

export default function VancanciesView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(7));
  }, []);

  return (
    <>
      <Container className="py-20">
        <h1 className="text-2xl font-medium mb-6">Bo'sh ish o'rinlari</h1>
        <table className="w-full">
          <thead>
            <tr>
              <td className="border text-center py-3 text-lg font-medium text-white bg-blue-500">
                Lavozim nomi
              </td>
              <td className="border text-center py-3 text-lg font-medium text-white bg-blue-500">
                Yopilish sanasi{" "}
              </td>
              <td className="border text-center py-3 text-lg font-medium text-white bg-blue-500">
                Bandlik turi
              </td>
              <td className="border text-center py-3 text-lg font-medium text-white bg-blue-500">
                Talablar
              </td>
            </tr>
          </thead>
          <tbody>
            {vacancies?.map((item, index) => (
              <Fragment key={index}>
                <tr>
                  <td className="border text-center py-3">{item?.name}</td>
                  <td className="border text-center py-3">{item?.expire}</td>
                  <td className="border text-center py-3">
                    {item?.employment_type}
                  </td>
                  <td className="border text-center py-3 cursor-pointer hover:text-blue-700 duration-100">
                    Ko'rish
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
