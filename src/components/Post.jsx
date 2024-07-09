import { useState } from "react";
import "./Post.css";

function Post() {

    const [curtida, setCurtida] = useState(false);

    function curteDescurte() {
        setCurtida(!curtida);
    }

    return (
        <section className="post-caixa">
            <h2>A porta</h2>
            <p>A porta entreaberta certa de que algo não está</p>
            <button onClick={curteDescurte}>{curtida ? "♥" : "♡"}</button>
        </section>
    );
}

export default Post;


// function Post() {

//     const [curtida, setCurtida] = useState("♡");

//     function curteDescurte() {
//         setCurtida(descurtido => (descurtido === "♡" ? "♥" : "♡"));
//     };


        // OU:
        // function curteDescurte() {
        //     if(curtida === "♡") {
        //         setCurtida("♥");
        //     } else {
        //         setCurtida("♡")
        //     }
        // }


//     return (
//         <section>
//             <h2>Teste Post</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, tenetur.</p>
//             <button onClick={curteDescurte}>{curtida}</button>
//         </section>
//     );
// };

// export default Post;