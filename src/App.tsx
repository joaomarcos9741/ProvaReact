import { GlobalStyle } from "./styles/GlobalStyle"
import { RouteSoftware } from "./routers"
import { BrowserRouter } from "react-router-dom"



function App() {

  return (
    <>
      

      <BrowserRouter>
      <GlobalStyle/>
      <RouteSoftware />
      </BrowserRouter>
     
  
     
    </>
    

  )
}

export default App
