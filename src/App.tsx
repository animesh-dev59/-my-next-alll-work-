import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"  
import Playaers from "./components/players/Playaers";
import type { Iplayer } from "./components/players/playerType";
const playersFetch  = async():Promise<Iplayer[]>=>{  
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}
function App() { 
  // console.log(playersPromise); 
  const playersPromise = playersFetch();

  return (
    <>  
    <Nav/> 
    <Banner/>
    <Suspense fallback={<h4>Loading...</h4>}>   
       <Playaers playersPromise={playersPromise}/> 
    </Suspense>
    
     
     
    </>
  )
}

export default App
