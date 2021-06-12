import React from 'react'

const images = new Map()

const List = ({ data }) => {
  return (
    <>
      {data.map((book) => {
        const { id, img, title, author } = book

        const removeHandler = (e) => {
          e.target.parentElement.parentElement.remove()

          document.getElementById('booksCount').innerText--
        }
        const hideHandler = (e) => {
          var currentState = e.target.innerText.toLowerCase()

          if (currentState === 'hide image') {
            var image =
              e.target.parentElement.parentElement.firstChild.firstChild
            images.set(id, image)
            image.style.display = 'none'
            currentState = 'Show Image'
          } else {
            images.get(id).style.display = 'block'
            currentState = 'Hide Image'
          }

          e.target.innerText = currentState
        }

        return (
          <div>
            <article key={id} className='person'>
              <img src={img} alt={title} className='img' />
              <div>
                <h4 className='arabic1'>{title}</h4>
                <p className='arabic2'>{author}</p>
              </div>
            </article>
            <p id='removeItem'>
              <span id='hideImage' onClick={(e) => hideHandler(e)}>
                Hide Image
              </span>
              <span id='removeLink' onClick={(e) => removeHandler(e)}>
                Remove Book
              </span>
            </p>
          </div>
        )
      })}
    </>
  )
}

export default List
