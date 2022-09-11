import BarChart from "./Components/BarChart";
import Layout from "./Components/Layout";

//import {getFormData, setFormData} from './redux/formdataAction';

//import thunk from "redux-thunk" ;
import "./App.css"
function App(props) {

  return (
    <div className="App">
      <center >
      <Layout />
      </center>
      <div id="barchart" style={{ width: 700 }}>

        <BarChart />

      </div>
    </div>
    
  )
}


export default App;
//
//<button onClick={() => dispatch(setFormData(100))}>Increase</button>
//  <BarChart chartData={userData} />

//const dispatch = useDispatch();
/*const mapDispatchToProps = dispatch => ({

  setFormData : () => dispatch(setFormData),
  getFormData: () => dispatch(getFormData)
});*/

//export default connect()(App);


/*import BarChart from "./Components/BarChart";
import Layout from "./Components/Layout";
import { connect } from "react-redux";
//import {getFormData, setFormData} from './redux/formdataAction';
import * as actions from './redux/formdataAction';
import thunk from "redux-thunk" 
import { useSelector, useDispatch } from "react-redux";
import "./App.css"
function App(props) {

  const {formdataReducer:{formData,loading},setFormData,getFormData}=props;
  const dispatch = useDispatch();
  debugger;
  return (
    <div className="App">
      <center >
      <Layout formData={formData} loading={loading} setFormData={setFormData}  getFormData={getFormData} />
      </center>
      <div id="barchart" style={{ width: 700 }}>

        <BarChart />

      </div>
    </div>
    
  )
}
//export default App;
//
//<button onClick={() => dispatch(setFormData(100))}>Increase</button>
//  <BarChart chartData={userData} />

const mapStateToProps = state => (
  
  {
  ...state
});

//const dispatch = useDispatch();
/*const mapDispatchToProps = dispatch => ({

  setFormData : () => dispatch(setFormData),
  getFormData: () => dispatch(getFormData)
});*/

//export default connect()(App);