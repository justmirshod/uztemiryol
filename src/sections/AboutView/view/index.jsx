import { useEffect } from "react";
import Container from "../../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById } from "../../../api/category";
import img from "../../../assets/images/picture1.png";

import "../styles.css";

export default function AboutView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(1));
  }, []);

  return (
    <>
      <Container className="py-20">
        <h1 className="text-[32px] font-medium mb-6">
          {data?.find((_, index) => index === 0)?.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.find((_, index) => index === 0)?.description,
          }}
          className="text-lg"
        ></div>
        <img src={img} alt="" className="w-full mt-10" />
      </Container>
    </>
  );
}
