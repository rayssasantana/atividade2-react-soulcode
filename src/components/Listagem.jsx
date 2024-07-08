import CardAluno from "./CardAluno";

const compras = [
    "Batata palha", "Batata frita", "Batata doce", "Batata chips", "Batata inglesa", "Batata rústica", "Batata crua"
];

const produtos = [
    {cod: 1, nome: "Batata palha", quantidade: 300, precoUnitario: 5},
    {cod: 2, nome: "Batata frita", quantidade: 400, precoUnitario: 10},
    {cod: 3, nome: "Batata doce", quantidade: 20, precoUnitario: 7},
    {cod: 4, nome: "Batata chips", quantidade: 40, precoUnitario: 10},
];

const alunos = [
    {matricula: 1, nome: "Rayssa", serie: "9°", media: 7.0},
    {matricula: 2, nome: "Évila", serie: "9°", media: 10.0},
    {matricula: 3, nome: "Chloe", serie: "9°", media: 6.0},
]
    

// Gerar componentes/elementos a partir de dados (array)

function Listagem() {
    // Cada string no array de comprar está sendo transformada em um array de <li>

    const itensCompra = compras.map((compra, index) => {
        return <li key={index}>{compra}</li>
    });
    // O key é importante para que o React saiba remover ou adicionar o elemento na tela corretamente
    const cardsProduto = produtos.map((produto) => {
        return (
            <article key={produto.cod}>
                <h3>{produto.nome}</h3>
                <p>QUANTIDADE: {produto.quantidade}</p>
                <p>SUBTOTAL: {produto.quantidade * produto.precoUnitario}</p>
            </article>
        );
    });
    
    const cardsAluno = alunos.map((aluno) => { // o aluno é um objeto
        return <CardAluno key={aluno.matricula} nome={aluno.nome} serie={aluno.serie} media={aluno.media} />
    });
    
    
    return (
        <>
            <h2>Lista de Compras</h2>
            <ul>{itensCompra}</ul>
            <hr />
            <h2>Lista de Produtos</h2>
            <section>{cardsProduto}</section>
            <hr />
            <h2>Lista de Alunos</h2>
            <section>{cardsAluno}</section>
        </>
    );
}

export default Listagem;

// (
//     <article key={aluno.matricula}>
//         <h3>{aluno.nome}</h3>
//         <p>Série: {aluno.serie}</p>
//         <p>Média: {aluno.media}</p>
//     </article>
// )
