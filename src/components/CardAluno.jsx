import "./CardAluno.css";

function CardAluno(props) {
    let mensagem;
    let classe;

    if(props.mediaAluno >= 7) {
        mensagem = "Aprovado!";
        classe = "aprovado";
    } else {
        mensagem = "Reprovado!";
        classe = "reprovado";
    }

    return (
        <article>
            <p className="nomeAluno">{props.nomeAluno}</p>
            <p className="serieAluno">Série: {props.serieAluno}</p>
            <p className="mediaAluno">Média: {props.mediaAluno}</p>
            <p className={classe}>{mensagem}</p>
        </article>
    );
}

export default CardAluno;