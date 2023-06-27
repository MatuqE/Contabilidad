import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import "../Css/Header.css"

const Header = () => {
  return (
    <div>
          <nav >
              <Button>
                      <Link className='m-2' to='/'>Ir a Home</Link>
              </Button>

                <Button>
                        <Link className='m-2' to='/Crud'>Ir a Crear Factura</Link>
                </Button>
          </nav>

    </div>
  )
}

export default Header