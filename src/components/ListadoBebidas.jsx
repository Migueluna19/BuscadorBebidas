import useBebidas from "../hooks/useBebidas"
import { Row } from "react-bootstrap"
import Bebida from "./Bebida"

function ListadoBebidas() {

    const {bebidas}=useBebidas()

  return (
    <Row className="mt-5">
        {bebidas.map(bebida=>(
            <Bebida
            bebida={bebida}
            key={bebida.idDrink}
            />
        ))}
    </Row>
  )
}

export default ListadoBebidas