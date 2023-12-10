const providerScript = [
  {name:"bestTramsportation", description:"bestTramsportation"},
  {name:"prMedicalTramsport", description:"prMedicalTramsport"},
  {name:"pereiraMedicalTramsport", description:"pereiraMedicalTramsport"}
]



function BasicS() {
    return (
    <section className="bg-c_Ebony w-[25vw] h-[95vh] m-2 rounded-lg shadow-md shadow-c_Mischka">
    <div className="w-full h-[10%] flexAllCenter">
          <h2 className="txtSecondary txtLg">Scripts basicos</h2>
      </div>
      <div className="bg-c_Purple  w-full h-[90%] p-1 flexAllCenter">

      <div className='w-full h-10/12'>
        {providerScript.map((item, index)=>{
            return(
                <div className={index%2 !== 0 ?'w-full h-1/10 flex':"w-full h-1/10 flex bg-c_LightGrayBlue"} key={index}>
                    <p className="h-full w-1/6 margins rounded-none outline-c_DarckBlue flexAllCenter overflow-hidden">{index+1}</p>
                    <p className="h-full w-2/6 margins rounded-none outline-c_DarckBlue flexAllCenter overflow-hidden" >{item.name}</p>
                    <p className="h-full w-1/6 margins rounded-none outline-c_DarckBlue flexAllCenter overflow-hidden">{item.description}</p>
                </div>
            )
        })}
        </div>

      </div>
    </section>
    );
  }
  
  export default BasicS;