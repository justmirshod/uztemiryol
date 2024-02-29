import { useDispatch } from "react-redux";
import Container from "../../components/Container";

export default function InspectionView() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryById(34));
  }, []);
  return (
    <Container className="py-20">
      <h1 className="text-2xl font-medium mb-8">Taftish komissiyasi tarkibi</h1>
    </Container>
  );
}
