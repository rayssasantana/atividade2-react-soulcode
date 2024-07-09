// 2. Crie um componente ConversorTemperatura, que converte o valor do input de celsius e mostra na tela a conversão para Fahrenheit. F = C x 1.8 + 32 ao clicar no botão de converter.

import { useState } from "react";
import "./ConversorTemperatura.css";

function ConversorTemperatura({fahrenheit = 32, evento = 0}) { 
    
    const [celsius, setCelsius] = useState(0);
    const [conversao, setConversao] = useState(fahrenheit);

    function handleCelsius(evento) {
        const input = evento.target;
        const c = input.value;
     
        setCelsius(c);
    }

    function handleConverter() {
        const conversao = celsius * 1.8 + 32;
        setConversao(conversao);
    }

    return (
        <section className="conversor-caixa">
            <h3>Conversor de Temperatura</h3>
            <input type="number" placeholder="Digite o grau °C" onChange={handleCelsius} />
            <button onClick={handleConverter}>Calcular</button>
            <h4>{celsius}°C = {conversao}°F</h4>
        </section>
    );
}

export default ConversorTemperatura;