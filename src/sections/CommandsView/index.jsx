import { useDispatch } from "react-redux";
import Container from "../../components/Container";

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
