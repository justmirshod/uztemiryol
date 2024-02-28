import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container";
import { useEffect } from "react";
import { getCategoryById } from "../../api/category";

//
import img from "../../assets/images/picture1.png";

export default function HistoryView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(2));
  }, []);

  return (
    <>
      <Container className="py-20">
        <h1
          className="text-2xl mb-6"
          dangerouslySetInnerHTML={{
            __html: data?.find((_, index) => index === 0)?.title,
          }}
        ></h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.find((_, index) => index === 0)?.description,
          }}
        ></div>
        <div className="border">
          <h1>Hello world</h1>
          <img src={img} alt="" />
        </div>
      </Container>
    </>
  );
}
