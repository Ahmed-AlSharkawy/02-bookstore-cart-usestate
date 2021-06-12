import React, { useState } from 'react'
import books from './books'
import List from './List'

function App() {
  const [data, setData] = useState(books)

  return (
    <main>
      <section className='container'>
        <h3>
          <img
            id='logo'
            src='https://www.pinclipart.com/picdir/middle/492-4924391_pink-shopping-cart-icon-shopping-cart-logo-png.png'
            alt='Logo'
            style={{ marginRight: '5px' }}
          />
          <strong id='booksCount' style={{ color: 'red' }}>
            {data.length}
          </strong>{' '}
          Books in cart
        </h3>

        <List data={data} />

        <button
          onClick={() => {
            setData([])
          }}
        >
          Clear Cart
        </button>
      </section>
    </main>
  )
}

export default App
