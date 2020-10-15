import React, { Fragment } from 'react'
import { useCookies } from 'react-cookie';
import perfil from '../Img/perfil.svg';
import cedula from '../Img/cedula.svg';
import fecha from '../Img/fecha.svg';
import gmail from '../Img/gmail.svg';
import github from '../Img/github.svg';

const Header = () => {
  const [cookies, setCoookie] =useCookies(['name'] )
 

    return (
 <Fragment>
  <nav className="navbar navbar-expand-lg col-12 nav">
  <a className="navbar-brand ml-md-5 item" ><img src={perfil} className="img" alt=""/>{cookies.name.nameperson} {cookies.name.lastName}</a>
  <a className="navbar-brand ml-md-5 item" ><img src={cedula} className="img" alt=""/>{cookies.name.document}</a>
  <a className="navbar-brand ml-md-5  item" ><img src={fecha} className="img" alt=""/>{cookies.name.date}</a>
  <a className="navbar-brand ml-md-5  item" ><img src={gmail} className="img" alt=""/>{cookies.name.email}</a>
  <a className="navbar-brand ml-md-5 item" ><img src={github} className="img" alt=""/>{cookies.name.github}</a>
  </nav>
</Fragment>   
    )
}

export default Header
