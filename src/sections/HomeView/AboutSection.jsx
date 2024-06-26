import { useTranslation } from "react-i18next";
import Container from "../../components/Container";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <div className=" bg-gray-500/80 h-full border border-transparent">
      <Container className="py-4 mb-8 text-white h-full">
        <h1 className="text-[36px] font-semibold text-center mt-3 mb-3">
          {t("about_us")}
        </h1>
        <p className="leading-[1.625]">
          Академический лицей международного Вестминстерского университета в
          Ташкенте (ALWIUT) был основан 9 декабря 2008 года и является
          общеобразовательной двухгодичной государственной среднеобразовательной
          школой. В отличие от образовательных систем других стран*,
          предлагающих 12-летнее школьное образование. Система образования
          Узбекистана включает 11-летнюю школу. Вместо потоков в лицее действует
          уровневая система: учащиеся 1-го уровня (курса) приравниваются к
          10-классникам в обычных школах, учащиеся 2-го уровня (курса) - к
          11-классникам. Каждый курс разделен на 7 русских групп и 2 узбекских
          группы, в общей сложности 487 студентов 1 и 2 курса. В отличие от
          других государственных школ, ALWIUT специализируется на продвинутых
          курсах по математике и английскому языку и предлагает их. В дополнение
          к этому ALWIUT предлагает платный курс «CAMBRIDGE - A Level», который
          признан всеми университетами Великобритании и около 850 университетами
          США в качестве вступительного уровня для поступления. Согласно
          мониторингу Министерства народного образования, ALWIUT была признана
          государственной школой №1 с точки зрения самого высокого уровня
          зачисления в школу с процентом 99 и успешно прошла аккредитацию, тест,
          оцениваемый Государственная инспекция по надзору за качеством
          образования при Кабинете Министров Республики Узбекистан, что
          означает, что ALWIUT подходит для обучения студентов.
        </p>
      </Container>
    </div>
  );
}

export default AboutSection;
