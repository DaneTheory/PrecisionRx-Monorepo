import Head from 'next/head'

import { Buttons } from '@precisionrx/components'


const Home = () => (
 <div className="container">
     <Buttons
       onClick={() => console.log('Buttons thiungy clicked!')}>
       Click me
     </Buttons>
 </div>
)


export default Home
