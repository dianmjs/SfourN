import React from 'react'
import { nextRepo ,updateList} from '../Redux/repogitDucks';
import {useSelector,useDispatch} from 'react-redux'
import flecha from '../Img/flecha.svg'




const TableRepo = () => {

 const dispatch=useDispatch()
 
const gitRepos = useSelector((store) => store.userGit.data);

const [filter,setFilter]=React.useState([])


const sortList=(id)=>{
  console.log("entra")
  if(id ==="name"){
     setFilter(gitRepos.sort((a,b)=>a.name >b.name ? 1: a.name < b.name ? -1: 0 )) 
  }else if(id==="description"){
     setFilter(gitRepos.sort((a,b)=>a.description >b.description ? 1: a.description< b.description? -1: 0 ))
  }else if(id==="forks_count"){
     setFilter(gitRepos.sort((a,b)=>a.forks_count >b.forks_count ? 1: a.forks_count < b.forks_count ? -1: 0 ))
  }else if(id==="git_url"){
     setFilter(gitRepos.sort((a,b)=>a.forks_count >b.forks_count ? 1: a.forks_count < b.forks_count ? -1: 0 ))
  }else if(id==="language"){
     setFilter(gitRepos.sort((a,b)=>a.forks_count >b.forks_count ? 1: a.forks_count < b.forks_count ? -1: 0 ))
  }
  console.log("prueba aux",filter)
  dispatch(updateList(filter))
  
  }
   
    return (
       
   <div>      
     <table className="table table-bordered tablerepo">
  <thead>
    <tr>
      <th scope="col-3">Nombre <button type="button" className="btn btn-success btn-sm btnlist" onClick={()=>sortList("name")} ><img src={flecha} className="flecha"/></button></th>
      <th scope="col-3">Descripción<button type="button" className="btn btn-success btn-sm ml-2 btnlist" onClick={()=>sortList("description")} ><img src={flecha} className="flecha"/></button></th>
      <th scope="col-3">Branch<button type="button" className="btn btn-success btn-sm ml-4 btnlist" onClick={()=>sortList("forks_count")} ><img src={flecha} className="flecha"/></button></th>
      <th scope="col-3">Url git<button type="button" className="btn btn-success btn-sm ml-4 btnlist" onClick={()=>sortList("git_url")} ><img src={flecha} className="flecha"/></button></th>
      <th scope="col-3">Lenguage<button type="button" className="btn btn-success btn-sm ml-2 btnlist" onClick={()=>sortList("language")} ><img src={flecha} className="flecha"/></button></th>
    </tr>
  </thead>
  <tbody>
    {gitRepos.map((date)=>{

      return(
      <tr key={date.id}>
      <td >{date.name}</td>
      <td>{date.description}</td>
      <td>{date.forks_count}</td>
      <td>{date.git_url}</td>
      <td>{date.language}</td>
       </tr>
      )
    })
      
    }       
  </tbody>
</table>
<div className=" buttonpage"  aria-label="Basic example">
  <button type="button" className="btn btn-primary mr-1">Previous</button>
  <button type="button" className="btn btn-primary mr-1"  >Next</button>
</div>
 </div>

    )
}

export default TableRepo
