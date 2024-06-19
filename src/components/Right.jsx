import { useContext } from "react"
import { cont } from "../App"
export default function Right() {
    const { product } = useContext(cont);
    let prod = product.filter((ele) => { return ele.number > 0 })
    console.log(prod)

    if (prod.length > 0)
        return (<div style={{ width: "30%", border: "20px solid #8b8b8b", minHeight: "55vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
                <h1 className="" style={{ textAlign: "center" }}>Cart</h1>
                {
                    prod.map((ele, idx) => {

                        return (
                            <div style={{ background: "#a6a6a6", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2vh", margin: "1vh" }} key={idx}>
                                <p>{ele.name}</p>
                                <div style={{ display: "flex", justifyContent: "space-between", gap: "1vw" }}>
                                    <p>{ele.number}</p>
                                    <p>x</p>
                                    <p>{ele.price}</p>
                                </div>


                            </div>
                        )

                    })
                }
            </div>
            <div style={{ background: "#8c8c8c", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2vh", margin: "1vh" }}>
                <p>Total:</p>
                <p>{prod.reduce((prev, acc) => {
                    return prev + (acc.price * acc.number);
                }, 0)}</p>
            </div>

        </div>)
    else {
        return (<div style={{ width: "30%", border: "20px solid #8b8b8b", minHeight: "55vh" }}>
                <div>
                    <h1 className="" style={{ textAlign: "center" }}>Cart</h1>
                    <h1 style={{marginTop:"2vh",textAlign:"center"}}>No Product added to the cart</h1>
                </div>
            </div>
            )

    }
}