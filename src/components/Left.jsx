import { useContext } from "react"
import { cont } from "../App"
export default function Left(){
    const {product,setProduct} = useContext(cont);

    function fun(flag,id){
        if(flag=="i"){
            let tmp=[...product];
            tmp[id].number++;
            setProduct(tmp);
        }
        else{
            let tmp=[...product];
            tmp[id].number--;
            setProduct(tmp);
        }
    }
    return(<div style={{width:"30%",border:"20px solid #b6b6b6",minHeight:"55vh"}}>
        <h1 className="" style={{textAlign:"center"}}>Products</h1>
        {
            product.map((ele,idx)=>{

                return(
                    <div style={{background:"#a6a6a6",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2vh",margin:"1vh"}} key={idx}>
                        <p>{ele.name}</p>
                        <p>{ele.price}</p>
                        <div style={{background:"#3b93a9",color:"white", display:"flex",justifyContent:"space-around",padding:"1vh",borderRadius:"8px",gap:"1vh",border:"1px solid black"}} >
                            <p className="hover:cursor-pointer" onClick={()=>{fun("d",idx)}}>-</p>
                            <p>{ele.number}</p>
                            <p className="hover:cursor-pointer" onClick={()=>{fun("i",idx)}}>+</p>
                        </div>
                    </div>
                )
            })
        }
        
    </div>)
}