import { Link } from "react-router-dom"

function Card1({data}) {
  return (
    <div className="col-lg-4">
      <div className="card mb-4 box-shadow" style={{ height: 375, width: 356 }}>
        <img
          src={data.img}
          className="card-img-top"
          alt="..."
          style={{ height: 225, width: 355 }}
        />
        <div class="card-body">
          <h4 class="card-text text-dark fw-semibold mt-3">
           {data.Titlename}
          </h4>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group mt-4">
              <Link to={data.Path} type="button" class="btn btn-sm btn-outline-secondary">
                View
              </Link>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
