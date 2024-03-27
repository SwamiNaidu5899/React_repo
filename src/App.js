import './App.css';
import ButtonN from './Components/Class-components/button';
import FormComponent from './Components/Class-components/form';
import ImageComponent from './Components/Class-components/img';
import ListComponent from './Components/Class-components/list';
import TableComponent from './Components/Class-components/table';
import ButtonF from './Components/Function-components/button';
import FormF from './Components/Function-components/form';
import ImageF from './Components/Function-components/image';
import ListF from './Components/Function-components/list';
import TableF from './Components/Function-components/table';

function App() {
  return (
    <div className="container">

     <div className=''>
      <h1>Class Components</h1>
      <h2>Button</h2>
     <ButtonN /><br/>
    <h2>Image</h2>
    <ImageComponent/>
    <h2>Form</h2>
      <FormComponent/>
    <h2>Lists</h2>
      <ListComponent/>
      <h2>Table</h2>
      <TableComponent/>

     </div>

        <div>

      <h1>Function Components</h1>
    <h2>Button</h2>
        <ButtonF />
        <h2>Image</h2>
        <h2>ImageSlider is added to this page</h2>
        <ImageF/>
        <h2>Form</h2>
        <h2>Login page</h2>
        <FormF/>
        <h2>Lists</h2>
        <ListF/>
        <h2>Table</h2>
        <TableF/>
        </div>

    </div>
  );
}

export default App;
