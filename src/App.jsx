import Banner from "./components/Banner";
import CardAluno from "./components/CardAluno";
import ConversorTemperatura from "./components/ConversorTemperatura";
import Listagem from "./components/Listagem";
import Post from "./components/Post";
import Produto from "./components/Produto";

function App() {
    return (
        <main>
            {/* Exercícios useState: */}

            <Post />
            <ConversorTemperatura />
        </main>
    );
}

export default App;


// Exercícios anteriores

            {/* <CardAluno 
            nomeAluno="Rayssa" 
            serieAluno="9°" 
            mediaAluno={7}
            />
            <CardAluno 
            nomeAluno="Évila" 
            serieAluno="9°" 
            mediaAluno={10}
            />
            <CardAluno 
            nomeAluno="Chloe" 
            serieAluno="9°" 
            mediaAluno={6}
            /> */}
            {/* <Produto nome="Celular" precoUnitario={2000} desconto={10} />
            <Produto nome="Fone Wireless" precoUnitario={100} desconto={15} />
            <Produto nome="Carro" precoUnitario={90000} desconto={0} /> */}
            {/* <Listagem /> */}
            {/* <Banner /> */}