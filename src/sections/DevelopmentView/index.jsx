import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container";
import { useEffect } from "react";
import { getCategoryById } from "../../api/category";

export default function DevelopmentView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(17));
  }, []);

  return (
    <>
      <Container className="py-20">
        <h1 className="text-2xl font-medium mb-8">
          {data?.results?.find((_, index) => index === 0)?.title ||
            "Rivojlanish strategiyasi"}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.results?.find((_, index) => index === 0)?.description,
          }}
        ></div>
        {!data?.count ? (
          <>
            <p>
              Temir yo’l transporti mavjud bo’lgandan beri va faoliyati davomida
              O'zbekiston iqtisodiyotining boshqa tarmoqlari bilan yaqindan
              hamkorlik qiladi. Uning asosiy vazifalaridan biri iqtisodiyot
              ehtiyojlarini qondirish uchun o'z vaqtida yuk va yo'lovchi
              tashishni ta'minlash hisoblanadi. Bu boradagi ishlar turli
              ko’rinishlarda amalga oshirilmoqda va O'zbekiston Respublikasi
              temir yo'l tarmog'ini o'tkazish va tashish imkoniyatlarini
              maksimal xavfsizligini ta'minlashga qaratilgan.
            </p>
            <p className="my-6">
              Yuk va yo'lovchi tashish shakllantirish, temir yo'ldan foydalanish
              xarajatlarni optimallashtirish, poezd harakatining xavfsizligini
              ta’minlash xalqaro shartnomalar doirasida xorijiy sheriklar bilan
              yaqin hamkorlikda amalga oshirilmoqda.
            </p>
            <p>
              O'zbekiston Respublikasi Markaziy Osiyodagi strategik geografik
              o'rinni egallashi va mintaqadagi geosiyosiy rivojlantirish markazi
              ekanligini hisobga olib, asosiy tranzit yo'laklarini qit'amizning
              Shimoliy va Janubiy Sharq va G'arbni bog'lovchi O'zbekiston
              Respublikasi hududi orqali o'tgan. Bu AJ ni rivojlantirishni
              rejalashtirishda va qo'shimcha o'rganishga va optimallashtirishga
              muhtoj bo’lgan muammolarni aniqlashda muhim omil hisoblanadi.
            </p>
          </>
        ) : null}
      </Container>
    </>
  );
}
