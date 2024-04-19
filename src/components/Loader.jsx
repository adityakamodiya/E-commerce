import { Loader, Placeholder } from 'rsuite';
 import 'rsuite/dist/rsuite.min.css';

 export  default function App(){

    return(
    <>
   <div style={{ height: 800, background: '#000' }}>
    <Loader inverse center content="loading..." />
  </div>
  </>
  )
}


// ReactDOM.render(<App />, document.getElementById('root'));