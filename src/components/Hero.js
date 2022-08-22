import right from "../images/right.svg";

export const Hero=()=>{
    return(
        <section className="hero container-fluid bg-warning p-2">
<div className="container">
  <div className="row ">
    <div className="col-md-6  d-flex  align-items-center">
      <div>

        <h1>Welcome to our website</h1>
        <p>Velit cupidatat et dolor ea laboris. Excepteur non nulla ex mollit. Do commodo ex aute non culpa
          ullamco. Sunt consequat ea esse mollit sit.</p>
        <a href="www.google.com" className="btn btn-dark">Click me</a>

      </div>
    </div>
    <div className="col-md-6 text-center d-md-block d-sm-none">
      <img src={right} width="300px" height="300px" alt="right"/>
    </div>
  </div>

</div>


</section>
    );
}