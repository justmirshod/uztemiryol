import { useMemo } from "react";
import Container from "../../components/Container";

//icons
import doc_icon from "../../assets/icons/doc.png";
import xls_icon from "../../assets/icons/xls.png";
import img_icon from "../../assets/icons/image.png";
import ppt_icon from "../../assets/icons/ppt.png";
import blank_icon from "../../assets/icons/blank.png";
import pdf_icon from "../../assets/icons/pdf.png";
import { flex } from "../../classes";

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
  const fileExtensionImg = (fileLink) => {
    const arr = fileLink?.split(".");
    const extension = arr[arr.length - 1];
    if (extension === "doc") return doc_icon;
    else if (extension === "xls" || extension === "xlsx") return xls_icon;
    else if (extension === "pdf") return pdf_icon;
    else if (extension === "jpg" || extension === "png" || extension === "svg")
      return img_icon;
    else return blank_icon;
  };

  return (
    <Container className="py-20">
      <>
        {laws?.map((law, index) => (
          <div
            className={`${flex.alignCenter} shadow-custom1 mb-6 p-6 rounded-md`}
            key={index}
          >
            <img
              src={fileExtensionImg(law?.link) || blank_icon}
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
