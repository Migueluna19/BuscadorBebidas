import { Modal,Image, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

function ModalBebida() {
    const {modal,hanleModalClick,receta,setReceta,setModal}=useBebidas()

        function mostrarIngredientes(){
            let ingredientes=[]
            for(let i=1;i<16;i++){
                if(receta[`strIngredient${i}`]){
                    ingredientes.push(
                        <li>{receta[`strIngredient${i}`]}{receta[`strMeasure${i}`]}</li>
                    )
                }
            }
            return ingredientes
        }
        function CierraModal(){
            setModal(false)
        }
    
  return (
    <Modal show={modal} onHide={()=>{
        hanleModalClick()
        setReceta({})
    }}>
        <Image src={receta.strDrinkThumb}
        alt={`Imagen Receta ${receta.strDrink}`}
        />
        <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="p-3">
            <h2>Instrucciones</h2>
            {receta.strInstructions}
            <h2>Ingredientes y Cantidades</h2>
            {mostrarIngredientes()}
           </div>
        </Modal.Body>
        <Button type="submit" className="mb-1 p-1" variant={'danger'} onClick={CierraModal}>Cerrar Ventana</Button>
    </Modal>
  )
}

export default ModalBebida