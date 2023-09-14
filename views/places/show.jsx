const React = require('react')
const Def = require('../default')

function show (data) {
    return (
      <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>
              {data.place.name}
            </h1>
            <h2>
              <a href={`/places/${data.place.id}/edit`}>
                Edit
              </a>
            </h2>
            <h2>
              <a href={`/places/${data.place.id}/delete`}>
                Delete
              </a>
            </h2>
            <h2>
              <a href={`/places/${data.place.id}/reviews`}>
                Reviews
              </a>  
            </h2>
            <h2>
              <a href={`/places/${data.place.id}/reviews/new`}>
                Add Review
              </a>
            </h2>
            <h2>
              <a href={`/places/${data.place.id}/reviews/${data.place.reviews.id}/edit`}>
                Edit Review
              </a>
            </h2>
            <h2>
              <a href={`/places/${data.place.id}/reviews/${data.place.reviews.id}/delete`}>
                Delete Review
              </a>
            </h2>
            <h3>
              {data.place.cuisines}
            </h3>
            <h3>
              {data.place.rating}
            </h3>
            <h3>
              {data.place.reviews}
            </h3>



            
          </div>
        </div>
      </main>
    </Def>
       
    )

}

module.exports = show
