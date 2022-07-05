import React from 'react'
import { Link } from 'react-router-dom'
function card() {
  return (
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">about</h5>
      <p class="card-text">Deserunt et ut dolor esse. Sint mollit velit et proident quis ipsum pariatur ex quis qui aliqua mollit dolore cupidatat. Ullamco et irure cillum do sunt.</p>
      <Link to="" class="btn btn-primary"> about page</Link>
    </div>
  </div>
  )
}

export default card