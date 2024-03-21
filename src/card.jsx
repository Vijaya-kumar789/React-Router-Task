function Card({data}) {


  return (
    <div className="col-lg-4">
    <div className="card mb-4 box-shadow" style={{height : 375, width: 356 ,}}>
    <img src={data.img} className="card-img-top" alt="..." style={{height : 225, width: 355 ,}} />
      <div className="card-body">
        <p className="card-text text-dark fw-semibold">
        {data.Titlename}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group ">
            <p className="mt-4 ">{data.Date}
</p>
          </div>
          <small className="text-muted mt-4 ">{data.time}</small>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
