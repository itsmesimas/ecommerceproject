import Catalog from '../../components/catalog/Catalog';
import Header from '../../components/header/Header';
import { Container } from './styles';

export default function Home() {
	return (
		<>
			<Header />
			<Container>
				<Catalog />
			</Container>
		</>
	);
}
