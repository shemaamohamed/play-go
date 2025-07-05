import './Loader.css'; // تأكدي إن المسار صح


const Loader = () => {
  return (
    <div className="flex justify-center items-center  m-auto">
      <div className="containerr">
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  )
}

export default Loader;
