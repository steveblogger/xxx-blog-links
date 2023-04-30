import React, { useEffect, useState } from 'react'
import { Data } from "./Utilities/Links"
import { useNavigate, useParams } from 'react-router-dom'

function Home() {
  const params = useParams()
  const [pageData, setPageData] = useState(Data.slice(0, 10))
  const navigate = useNavigate()
  var id = 0

  function jumpButtons() {
    var links = Data.length
    var next = (links - (10 * (params.page - 1))) <= 10
    return <div className='nav-buttons'>
      {params.page <= 1 ? <span></span> : <button className='prev-button' onClick={prevPage}>Previous</button>}
      {next ? <span></span> : <button className='next-button' onClick={nextPage}>Next</button>}
    </div>
  }

  function prevPage() {
    var page = Number(params.page) - 1
    navigate("/pages/" + page)
  }

  function nextPage() {
    var page = Number(params.page) + 1
    navigate("/pages/" + page)
  }

  useEffect(() => {
    var start = (params.page - 1) * 10
    if ((Data.length - start) < 10) {
      setPageData(Data.slice(start))
    } else {
      setPageData(Data.slice(start, start + 10))
    }
  }, [params])

  return (
    <div className='box'>
      {pageData.map((content) => {
        id = id + 1
        return <div key={id}>{content}</div>
      })
      }
      {jumpButtons()}
    </div>
  )
}

export default Home