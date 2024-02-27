//icons
import doc_icon from "../assets/icons/doc.png";
import xls_icon from "../assets/icons/xls.png";
import img_icon from "../assets/icons/image.png";
import ppt_icon from "../assets/icons/ppt.png";
import blank_icon from "../assets/icons/blank.png";
import pdf_icon from "../assets/icons/pdf.png";

const defineFileExtensionImg = (fileLink) => {
  const arr = fileLink?.split(".");
  const extension = arr[arr.length - 1];
  if (extension === "doc") return doc_icon;
  else if (extension === "xls" || extension === "xlsx") return xls_icon;
  else if (extension === "pdf") return pdf_icon;
  else if (extension === "ppt" || extension === "pptx") return ppt_icon;
  else if (extension === "jpg" || extension === "png" || extension === "svg")
    return img_icon;
  else return blank_icon;
};

export { defineFileExtensionImg };
