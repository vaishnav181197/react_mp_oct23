import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allApis'

function History() {
  const [his, setHis] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await getHistory()
    console.log(res.data)
    setHis(res.data)
  }


  return (
    <>
      <div className='p-5'>
        <h1>Watch History</h1>
        <table className="table table-bordered">
          <tr>
            <th>Caption</th>
            <th>Url</th>
            <th>Date & Time</th>
            <th></th>
          </tr>
          {
            his ?
              his.map(item => (
                <tr>
                  <td>{item.caption}</td>
                  <td>{item.url}</td>
                  <td>{item.datetime}</td>
                  <td>
                    <i class="fa-solid fa-trash text-light"></i>
                  </td>
                </tr>
              ))
              :
              <tr>
                <p className='text-danger'>No watch history!!</p>
              </tr>
          }
        </table>
      </div>
    </>
  )
}

export default History