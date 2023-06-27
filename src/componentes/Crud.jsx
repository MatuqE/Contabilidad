import React, { useEffect, useState } from "react";
import Header from "./Header";
import Tabla from "./Tabla";

const Crud = () => {
  const [fecha, setFecha] = useState("");
  const [tipoFactura, setTipoFactura] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [cuit, setCuit] = useState("");
  const [direccion, setDireccion] = useState("");
  const [condicionPago, setCondicionPago] = useState("");
  const [condicionIva, setCondicionIva] = useState("");

  const [descProducto, setDescProducto] = useState("");
  const [precioUnitario, setPrecioUnitario] = useState(0);
  const [cantidad, setCantidad] = useState(0)
  const [iva, setIva] = useState(0);
  const [total, setTotal] = useState(0);
  const [productos, setProductos] = useState([])  
  const [totalProductos, setTotalProductos] = useState(0)
  const [totalIva, setTotalIva] = useState(0)
  const [totalConTodo, setTotalConTodo] = useState(0)



  const [visible, setVisible] = useState(true)


  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  
  const handleCrearFactura = () => {
    setVisible(false)
    setTotal(cantidad * precioUnitario)
    setIva(precioUnitario * 0.21) 
  }
  
  
  const handleAgregar = () => {
    setProductos([...productos, {descProducto: descProducto, cantidad: cantidad, precioUnitario: precioUnitario, iva : iva, total: total}])
    setTotalProductos(total+totalProductos)
    setTotalIva((iva * cantidad) + totalIva)      
  };
  
  const handleCalcular = () => {
    setTotalConTodo(totalIva+totalProductos)   
    };
    
    useEffect(()=>{
      },[])
  
  return (
    <div>
      <Header />
      <div className="container m-auto">
        <h3>Datos del cliente</h3>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Fecha</label>
          <input type="date" onChange={(e) => setFecha(e.target.value)} />{" "}
          <br />
          <br />
          <label htmlFor="">Tipo Factura</label>
          <select
            name=""
            id=""
            onChange={(e) => setTipoFactura(e.target.value)}
          >
            <option value="Factura A">Factura A</option>
            <option value="Factura A con leyenda">Factura A con leyenda</option>
            <option value="Factura B">Factura B</option>
            <option value="Factura M">Factura M</option>
            <option value="Factura C">Factura C</option>
            <option value="Factura E">Factura E</option>
          </select>{" "}
          <br /> <br />
          <label htmlFor="">Nombre Cliente</label>
          <input
            type="text"
            onChange={(e) => setNombreCliente(e.target.value)}
          />{" "}
          <br />
          <br />
          <label htmlFor="">CUIT</label>
          <input type="text" onChange={(e) => setCuit(e.target.value)} /> <br />
          <br />
          <label htmlFor="">Direccion</label>
          <input
            type="text"
            onChange={(e) => setDireccion(e.target.value)}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Condicion de pago</label>
          <select
            name=""
            id=""
            onChange={(e) => setCondicionPago(e.target.value)}
          >
            <option value="Efectivo">Efectivo</option>
            <option value="Cuenta Corriente">Cuenta Corriente</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Cheque">Cheque</option>
          </select>
          <br />
          <br />
          <label htmlFor="" >
            Condicion ante IVA
          </label>
          <select name="" id="" onChange={(e) => setCondicionIva(e.target.value)}>
            <option value="Responsable Inscripto">Responsable Inscripto</option>
            <option value="Monotributista">Monotributista</option>
            <option value="Consumidor Final">Consumidor Final</option>
            <option value="No Responsable">No responsable</option>
          </select>
          <br />
          <br />
          <div className="container">
              <h3>Productos</h3>
              <label htmlFor="">Descripcion Producto :</label>
              <input
                type="text"
                onChange={(e) => setDescProducto(e.target.value)}
              />
              <label htmlFor="">Precio Neto Unitario</label>
              <input
                type="text"
                onChange={(e) => {setPrecioUnitario(e.target.value);}}
              /> <br /> <br />
              <label htmlFor="">Cantidad</label>
                <input
                  type="text"
                  onChange={(e) => setCantidad(e.target.value)}
                />
              {/* <label htmlFor="">IVA</label>
              <input
                type="text"
                onChange={(e) => setIva(e.target.value)}
              /> <br /> <br /> */}
          </div>

         

          <button onClick={handleCrearFactura}>Crear Factura</button>
        </form>
          <button onClick={handleAgregar}>Agregar</button>
          <button onClick={handleCalcular}>Calcular</button>
          

        <div id="divFac" hidden={visible}>
          <div className="m-4">
          </div>
          <div className="divFactura row">
            <div className="col-8">
              <h3>SOL SRL </h3>
              <br />
              <p>
                San Martin 145 - San miguel de Tucuman <br />
                solsrl@gmail.com <br />
                Tel 0381-4000000 <br />
                CUIT: 33-45454545-9
              </p>
            </div>
            <div className="h2Factura col-3">
              <h2>Factura</h2>
              <p>N° 000000001</p>
              <p>
                C U I L: {cuit}
                <br />
                fecha: {fecha}
              </p>
            </div>
            <div className="row">
                <div className="col-2 divRotado">
                    <h3 className="h3Rotado">{tipoFactura}</h3>
                </div>
              <div className="col-10 divCliente">
                <h3>Cliente</h3>
                <p>
                  Nombre {nombreCliente} <br />
                  CUIT {cuit} <br />
                  Direccion {direccion} <br />
                  Condicion de Pago {condicionPago} <br />
                  Condicion ante IVA {condicionIva}
                </p>
              </div>
              <div className="">
                <Tabla productos={productos}/>
              </div>
              <div className="m-auto col-5">
                <p>
                  Observaciones / Instrucciones de pago: <br />A 12 dias fecha
                  factura
                </p>
                <p> Terminos y Instrucciones</p>
              </div>
              <div className="divTotal m-auto col-5">
                <p className="pTotal">
                  Total {totalProductos} <br />
                  {/* Descuento -- <br />
                  Subtotal menos descuento 291.300,00 <br /> */}
                  totalIVA {totalIva} <br />
                  {/* Total impuestos -- <br />
                  Envio -- <br /> */}
                </p>
                <p>TotalConTodo {totalConTodo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;