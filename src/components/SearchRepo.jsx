import React, {useState} from 'react'
import TableRepo from './TableRepo'
import { useDispatch, useSelector } from "react-redux";
import { infoReposAccion } from '../Redux/repogitDucks';

const SearchRepo = () => {

const [user, setUser] = useState('');

const dispatch=useDispatch();

React.useEffect(()=>{
    dispatch(infoReposAccion());
},[dispatch])

const GiUserValidate = useSelector((store) => store.userGit.data);

const onChangeHanler=(e)=>{
setUser(e.target.value)

};
const handleSubmit=(e)=>{
    e.preventDefault();
   
 e.target.reset()

}

    return (
        <div className="mt-4 search col-12">
        <h3 className="titleSearch">Buscador de repositorios</h3>
        <div className="row inputSeach">
          <div className="col-md-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Git username"
                aria-label=""
                aria-describedby="basic-addon1"
                value={user}
                onChange={onChangeHanler}
              />
              
            </div>
            </form>
          </div>
          <div className="ml-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => dispatch(infoReposAccion(user))}
              >
               Buscar
            </button>
          </div>
        </div>
        {
          GiUserValidate.message==="Not Found" ? (
           <div class="alert alert-danger col-md-3"  role="alert">
             Usuario no encontrado!!
       </div>
         ):(
       <TableRepo/>
           )
        }
        
      </div>
        
    )
}

export default SearchRepo
