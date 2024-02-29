import { Link } from "react-router-dom";
import { flex } from "../../classes";
import Container from "../../components/Container";
import { defineFileExtensionImg } from "../../utils/files";
import { useDispatch } from "react-redux";

const plans = [
  {
    name: `"O'zbekiston temir yo'llari AJning 2023-yil yanvar-sentabr oylarida jamiyat biznes rejasi prognoz ko'rsatkichlarining bajarilishi to'g'risida MA'LUMOT.pdf`,
    link: "https://railway.uz/upload/iblock/64c/3yt535vnz0zbm35i2h33l25gqmhk5cdx.pdf",
  },
  {
    name: `"O'zbekiston temir yo'llari AJning 2023-yil yanvar-sentabr oylarida jamiyat biznes rejasi prognoz ko'rsatkichlarining bajarilishi to'g'risida MA'LUMOT.pdf`,
    link: "https://railway.uz/upload/iblock/64c/3yt535vnz0zbm35i2h33l25gqmhk5cdx.pdf",
  },
  {
    name: `"O'zbekiston temir yo'llari AJning 2023-yil yanvar-sentabr oylarida jamiyat biznes rejasi prognoz ko'rsatkichlarining bajarilishi to'g'risida MA'LUMOT.pdf`,
    link: "https://railway.uz/upload/iblock/64c/3yt535vnz0zbm35i2h33l25gqmhk5cdx.pdf",
  },
  {
    name: `"O'zbekiston temir yo'llari AJning 2023-yil yanvar-sentabr oylarida jamiyat biznes rejasi prognoz ko'rsatkichlarining bajarilishi to'g'risida MA'LUMOT.pdf`,
    link: "https://railway.uz/upload/iblock/64c/3yt535vnz0zbm35i2h33l25gqmhk5cdx.pdf",
  },
];

export default function BussinesPlanView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(31));
  }, []);

  return (
    <Container className="py-20">
      <h1 className="text-[32px] font-semibold mb-16">Biznes reja</h1>
      {plans?.map((plan, index) => (
        <div className={`${flex.alignCenter} mb-6`} key={index}>
          <img
            src={defineFileExtensionImg(plan?.link)}
            width={40}
            height={40}
            alt=""
          />
          <Link
            to={plan?.link}
            target="_blank"
            className="ml-4 text-lg text-blue-600 underline"
          >
            {plan?.name}
          </Link>
        </div>
      ))}
    </Container>
  );
}
