import Options from "./components/options";
import Generator from "./components/generator";
import BasicS from "./components/basicS";


function App() {
  return (
    <div className='bg-c_Ebony w-screen h-[calc(100vh)] flexAllCenter text-c_Mischka txtPrincipal'>
        <Options/>
        <Generator/>
        <BasicS/>
    </div>
  );
}

export default App;
