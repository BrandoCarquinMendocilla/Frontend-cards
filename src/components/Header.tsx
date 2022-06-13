import * as React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap';
import { Note } from '../models/note.models';

interface IHeaderProps {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
  oriNotes: Note[],
  setIsTodos:React.Dispatch<React.SetStateAction<boolean>>
}
const Header: React.FunctionComponent<IHeaderProps> = ({setNotes,oriNotes,setIsTodos}) => {
  
 
  const filtrar = (categoria:string) =>{ 
    
    if(categoria===""){
      setIsTodos(true)
      setNotes(oriNotes);
    }else if(categoria ==="autos"){
      setIsTodos(false)
      setNotes(oriNotes.filter(select => select.categoria === categoria));
    }else if(categoria ==="salud"){
      setIsTodos(false)
      setNotes(oriNotes.filter(select => select.categoria === categoria));
    }else if(categoria ==="hogar"){
      setIsTodos(false)
      setNotes(oriNotes.filter(select => select.categoria === categoria));
    }
  }
  
  return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => filtrar("")} >CM Brando Javier</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  onClick={() => filtrar("")}>Todos</Nav.Link>
              <Nav.Link  onClick={() => filtrar("autos")}>Autos</Nav.Link>
              <Nav.Link onClick={() => filtrar("salud")}>Salud</Nav.Link>
              <Nav.Link onClick={() => filtrar("hogar")}>Hogar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
