import "./CardAluno.css";

// Correção

{/* <CardAluno nome="" serie="" media={0}/> */}
function CardAluno(props) {
    const classe = props.media >= 7 ? "aprovado" : "reprovado";

    return (
        <article className="card-aluno">
            <h4>{props.nome}</h4>
            <p>Série: {props.serie}</p>
            <strong className={classe}>Média: {props.media}</strong>
            <p className={classe}>{props.media >= 7 ? "Aprovado!" : "Reprovado!"}</p>
        </article>
    );
}

export default CardAluno;


// function CardAluno(props) {
//     let mensagem;
//     let classe;

//     if(props.mediaAluno >= 7) {
//         mensagem = "Aprovado!";
//         classe = "aprovado";
//     } else {
//         mensagem = "Reprovado!";
//         classe = "reprovado";
//     }

//     return (
//         <article className="cardAluno-caixa">
//             <p className="nomeAluno">{props.nomeAluno}</p>
//             <p className="serieAluno">Série: {props.serieAluno}</p>
//             <p className="mediaAluno">Média: {props.mediaAluno}</p>
//             <p className={classe}>{mensagem}</p>
//         </article>
//     );
// }

// export default CardAluno;