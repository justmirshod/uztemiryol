import Container from "../../components/Container";

import { flex } from "../../classes";
import { defineFileExtensionImg } from "../../utils/files";

const laws = [
  {
    name: `"O‘zbekiston temir yo'llari" AJda tovarlar (ishlar, xizmatlar) ni amalga oshirishda axloqiy xulq-atvor qoidalarini tasdiqlash to'g'risida "20.06.2018 yildagi 37-N-son buyrug'ining asli ruscha matinda`,
    link: "https://railway.uz/upload/iblock/758/758bf17a4ab4a5d971a833b831268555.doc",
  },
  {
    name: `"O‘zbekiston temir yo'llari" AJda tovarlar (ishlar, xizmatlar) ni amalga oshirishda axloqiy xulq-atvor qoidalarini tasdiqlash to'g'risida "20.06.2018 yildagi 37-N-son buyrug'ining asli ruscha matinda`,
    link: "https://railway.uz/upload/iblock/ed6/ed6fcd2d37b49ddf0aa2b317744c087e.pdf",
  },
  {
    name: `"O‘zbekiston temir yo'llari" AJda tovarlar (ishlar, xizmatlar) ni amalga oshirishda axloqiy xulq-atvor qoidalarini tasdiqlash to'g'risida "20.06.2018 yildagi 37-N-son buyrug'ining asli ruscha matinda`,
    link: "https://railway.uz/upload/iblock/758/758bf17a4ab4a5d971a833b831268555.doc",
  },
  {
    name: `"O‘zbekiston temir yo'llari" AJda tovarlar (ishlar, xizmatlar) ni amalga oshirishda axloqiy xulq-atvor qoidalarini tasdiqlash to'g'risida "20.06.2018 yildagi 37-N-son buyrug'ining asli ruscha matinda`,
    link: "https://railway.uz/upload/iblock/758/758bf17a4ab4a5d971a833b831268555.doc",
  },
];

export default function RepublicLawsView() {
  return (
    <Container className="py-20">
      <>
        {laws?.map((law, index) => (
          <div
            className={`${flex.alignCenter} shadow-custom1 mb-6 p-6 rounded-md`}
            key={index}
          >
            <img
              src={defineFileExtensionImg(law?.link)}
              width={60}
              height={60}
              alt=""
            />
            <p className="text-lg ml-6 font-medium">{law?.name}</p>
          </div>
        ))}
        <div className="text-center mt-10">
          <button className="border py-2 px-6 rounded-md hover:bg-gray-50">
            Yana ko'rish
          </button>
        </div>
      </>
    </Container>
  );
}
