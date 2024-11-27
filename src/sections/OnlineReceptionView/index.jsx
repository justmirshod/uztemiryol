import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getCategoryById } from "../../api/category";
import { postApplies } from "../../api/contact";
import { clearCreatedApply } from "../../redux/slices/contact.slice";

export default function OnlineReceptionView() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);
  const { createLoading, createdApply } = useSelector((state) => state.apply);

  const ref = useRef();

  useEffect(() => {
    dispatch(getCategoryById(10));
  }, []);

  useEffect(() => {
    if (createdApply?.id) {
      dispatch(clearCreatedApply());
      ref.current.reset();
    }
  }, [createdApply]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(postApplies(formData));
  };

  return (
    <Container className="py-20">
      <div className="container">
        <form
          className="w-[100%] md:w-[70%] mx-auto py-6 px-8 shadow-custom1 rounded-lg"
          onSubmit={handleSubmit}
          ref={ref}
        >
          <h1 className="text-xl font-medium mb-4">{t("online_reception")}</h1>
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              name="name"
              className="col-span-1 border px-2 py-2.5 rounded-sm"
            />
            <input
              type="email"
              placeholder="Elektron pochta manzilingiz"
              name="email"
              className="col-span-1 border px-2 py-2.5 rounded-sm"
            />
            <input
              type="text"
              placeholder="Mavzu"
              name="topic"
              className="col-span-2 border px-2 py-2.5 rounded-sm"
            />
            <textarea
              type="text"
              placeholder="Murojaatingizni yozing"
              className="col-span-2 border px-2 py-2.5 rounded-sm"
              name="message"
              rows={8}
            />
          </div>
          <button
            className="bg-blue-500 text-white mt-4 px-8 py-2 rounded-sm hover:bg-blue-700 duration-200 disabled:bg-gray-300"
            type="submit"
            disabled={createLoading}
          >
            {createLoading ? "Yuborilmoqda..." : "Yuborish"}
          </button>
        </form>
      </div>
      {/* <p className="text-blue-700 mb-6 text-xl font-medium  ">
        {t("contact_page.dear_users")}
      </p>
      <p className="mb-6">{t("contact_page.content")}</p>
      <p className="text-blue-700 text-xl font-medium">
        {t("contact_page.honorly")}
      </p> */}
    </Container>
  );
}
