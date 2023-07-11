import { useState,useEffect,createContext } from "react";
import axios from "axios";

const BebidasContext=createContext()

function BebidasProvider({children}){

    const [bebidas,setBebidas]=useState([])
    const [modal,setModal]=useState(false)
    const [bebidaId,setbebidaId]=useState('')
    const [receta,setReceta]=useState({})

    async function consultarBebida(datos){
        try {
            const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const {data}=await axios(url)
            setBebidas(data.drinks)

        } catch (error) {
            console.log(error) 
        }
    }

    function handleModalClick(){
        setModal(!modal)
    }
    function handleBebidaIdClick(id){
        setbebidaId(id)
    }

    useEffect(()=>{
        async function obtenerReceta(){
            if(!bebidaId){
                return;
            }
            try {
                const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const {data}=await axios(url)
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            }
        }
        obtenerReceta()
    },[bebidaId])
    
    return(
        <BebidasContext.Provider 
        value={{
           consultarBebida,
           bebidas,
           handleModalClick,
           modal,
           handleBebidaIdClick,
           receta,
           setReceta,
           setModal
        }}
        >
            {children}
        </BebidasContext.Provider>
    )
}
export {
    BebidasProvider
}
export default BebidasContext