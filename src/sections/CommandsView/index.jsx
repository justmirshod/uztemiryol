import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container";
import { getCategoryById } from "../../api/category";
import { useEffect } from "react";

export default function CommandsView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(27));
  }, []);

  return (
    <Container className="py-20">
      <h1 className="text-2xl font-medium">Farmoishlar</h1>
    </Container>
  );
}
