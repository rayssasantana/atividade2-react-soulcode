import "./Banner.css";
import imagem from "../assets/banner.jpg";

function Banner() {
    return (
        <section>
            <img src={imagem} alt="Banner" width="240" />
            <br/>
            <img src="/vite.svg" alt="Logo do vite" />
            <br/>
            <img src="/banner.png" />
            <button>Clique aqui</button>
        </section>
    );
}

export default Banner;