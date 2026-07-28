import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function Mycomponent(){
  return null;//valid jsx
}

function Mycomponent2(){
  return(
    <div>
      <h1>This is a react Component </h1>
    </div>
  )
}

function Mycomponent3(){
  return(
    <>
    <div>
      <h1>This is a react Component with two HTML elements.</h1>
    </div>

      <div>
      <h1>It shows how to use multiple HTML elements.</h1>
    </div>
    </>
  )
}

function Parentcomponents(){
  return(
    <>
    <Mycomponent/> {/* this is a self closing component to be rendered */}
    <Mycomponent2></Mycomponent2>{/* this is an opening and closing component to be rendered */}
    <Mycomponent3/>
    </>
  )

}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>My first React App.</h1>
    <Mycomponent/> {/* this is a self closing component to be rendered */}
    <Mycomponent2></Mycomponent2>{/* this is an opening and closing component to be rendered */}
    <Mycomponent3/>
    <Parentcomponents/> {/* this is component that renders other components */}
  </StrictMode>,
)
