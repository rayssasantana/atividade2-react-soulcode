import CardAluno from "./components/CardAluno";
import Produto from "./components/Produto";

function App() {
    return (
        <main>
            <CardAluno 
            nomeAluno="Rayssa" 
            serieAluno="9°" 
            mediaAluno="7"
            />
            <CardAluno 
            nomeAluno="Évila" 
            serieAluno="9°" 
            mediaAluno="10"
            />
            <CardAluno 
            nomeAluno="Chloe" 
            serieAluno="9°" 
            mediaAluno="6"
            />
        </main>
    );
}

export default App;