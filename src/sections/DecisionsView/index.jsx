import { useDispatch } from "react-redux";
import Container from "../../components/Container";

export default function DecisionsView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(28));
  }, []);

  return (
    <Container className="py-20">
      <h1 className="text-2xl font-medium">Qarorlar</h1>
    </Container>
  );
}
