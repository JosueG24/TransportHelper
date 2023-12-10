

function Generator() {
    return (
    <section className="bg-c_Ebony w-[45vw] h-[95vh] m-2 rounded-lg shadow-md shadow-c_Mischka">
      <div className="w-full h-[10%] flexAllCenter">
          <h2 className="txtSecondary txtLg">Generador de scripts</h2>
      </div>
      <div className=" w-full h-[90%] p-1 flexAllCenter">
        <Selector1/>
      </div>
    </section>
    );
  }
  
function Selector1(){
    return(
      <div className="bg-c_Purple w-full h-[100%]">

      </div>
    );
}

  export default Generator;