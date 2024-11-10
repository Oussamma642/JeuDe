

import { useState } from "react";


function JeuDe (prpos)
{
    const listImgs = ['Dé.PNG', 'face1.PNG', 'face2.PNG', 'face3.PNG', 'face4.PNG', 'face5.PNG', 'face6.PNG', 'vide.PNG'];
    
    const [path, setPath] = useState(`${listImgs[0]}`);

    const [val, setVal] = useState(0);

    const [nbrEss, setNbrEss] = useState(0);

    const genererNbr = ()=>
        {
            const newVal = Math.floor(Math.random() * 6) + 1;
            setVal(newVal); 
            setPath(listImgs[newVal]); 
            setNbrEss(nbrEss + 1); 
        }


    const initialiser = () =>
        {
            setPath(`${listImgs[7]}`);
            setNbrEss(0);
            setVal(0);
        }

    return (
    <>
        <h1>Jeu Dé..</h1>
        <div>
            <h3> Path: {path} </h3>
            <h3> Valeur: {val} </h3>
            <img style={{width:"200px", height:"200px"}} src={`./images/${path}`} alt="" />
        </div>
        
        <h3>Nombre d'essais: {nbrEss} </h3> 

        <span> <h3> {prpos.nbr == val? 'Bravo vous avez trouvez la face cachée….':''} </h3> </span>
        
        <button onClick={genererNbr}> Joueeeeer </button>
        <button onClick={initialiser}>Initialiser</button>
    </>
    );
}
export default JeuDe;