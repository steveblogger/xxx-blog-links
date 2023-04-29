import React, { useState } from 'react'
import { Data } from "./Utilities/Links"

function Home() {
  const [page, setPage] = useState(1)
  const [pageData, setPageData] = useState(Data.slice(0, 10))

  function jumpButtons() {
    var links = Data.length
    var next = (links - (10 * (page - 1))) <= 10
    console.log(page);
    return <div className='nav-buttons'>
      {page <= 1 ? <span></span> : <button className='prev-button' onClick={prevPage}>Previous</button>}
      {next ? <span></span> : <button className='next-button' onClick={nextPage}>Next</button>}
    </div>
  }

  function prevPage() {
    var start = (page - 2) * 10
    setPage(page - 1)
    if ((Data.length - start) < 10) {
      setPageData(Data.slice(start))
    } else {
      setPageData(Data.slice(start, start + 10))
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function nextPage() {
    var start = page * 10
    setPage(page + 1)
    if ((Data.length - start) < 10) {
      setPageData(Data.slice(start))
    } else {
      setPageData(Data.slice(start, start + 10))
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='box'>
      {pageData.map((content) => {
        return content
      })
      }
      {jumpButtons()}
    </div>
  )
}

export default Home