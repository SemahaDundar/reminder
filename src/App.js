
import Container from './Container';
import React from 'react';
import data from './data';


function App() {

  const [items, setItems] = React.useState (data)
    return(
      <main>
      <section className='kutu'>
        <h3>{items.length} birthdays today</h3>
        <Container items={items}/>
        <button onClick={() => setItems([])}>clear all</button>

      </section>
      
      </main>
    )

}
export default App;
