
import Table from 'react-bootstrap/Table';

const Tabla = ( { productos } ) => {
  return (
    <div> <Table striped bordered hover className="tabla1 bg-ligt">
    <thead className='bg-primary'>
      <tr>
        <th>Descripcion</th>
        <th>Unidades</th>
        <th>Precio Unidad</th>
        <th>IVA</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      {
        productos.map((producto, index) => {
          return(
            <tr key={index}>
              <td>{producto.descProducto}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.precioUnitario}</td>
              <td>{producto.iva}</td>
              <td>{producto.total}</td>
            </tr>
          )
        })
      }
      </tbody>
      </Table>
      </div>
    )

}

export default Tabla