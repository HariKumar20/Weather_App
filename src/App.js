import logo from './logo.svg';
import './App.css';
import { geoApi } from './api';
import { tempApi } from './api';
import { useEffect, useState } from 'react';

function App() {

  const [placeName , setPlaceName] = useState("");
  const [lat , setLat] = useState("");
  const [lon , setLong]=useState("");
  const [tempObj , setTempObj] = useState({});
  const getData = ()=>{
    fetch(`${geoApi}${placeName}&appid=2ed5d4eb513b3219ab66feb1a5fba6f1`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log("data : ",data);
      setLat(data[0].lat);
      setLong(data[0].lon);
    });

    fetch(`${tempApi}lat=${lat}&lon=${lon}&appid=2ed5d4eb513b3219ab66feb1a5fba6f1`)
    .then((res) =>res.json())
    .then((data)=>{
      const index = Math.floor(Math.random()*40);
      console.log("Random Number : ",index);
      setTempObj(data.list[index].main);
    })
  }
  return (
    <div class="App">

        <div class="header">
          <div class="header-col1">
            <p class="header-title">Weather City</p>
          </div>
          <div class="header-col2">
            <input class="search-class" onChange={(e)=>setPlaceName(e)}></input>
            <button class="button-class" onClick={()=>getData(placeName)}>search</button>
          </div>
        </div>
        <div class="body">
          <div class="table-1">
            <table class="temp-table" border={1}>
              <tr class="date-row" colspan={2}><th>Date: DD/MM/YYYY</th></tr>
              <tr colspan={2}><th>Temperature</th></tr>
              <tr>
                <th>Min</th>
                <th>Max</th>
              </tr>
              <tr>
                <td>{tempObj.temp_min}</td>
                <td>{tempObj.temp_max}</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{tempObj.pressure}</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{tempObj.humidity}</td>
              </tr>
            </table>
          </div>
          <div class="table-1">
            <table class="temp-table" border={1}>
              <tr class="date-row"><th>Date: DD/MM/YYYY</th></tr>
              <tr><th>Temperature</th></tr>
              <tr colspan={2}>
                <th>Min</th>
                <th>Max</th>
              </tr>
              <tr>
                <td>{tempObj.temp_min}</td>
                <td>{tempObj.temp_max}</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{tempObj.pressure}</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{tempObj.humidity}</td>
              </tr>
            </table>
          </div>
          <div class="table-1">
            <table class="temp-table" border={1}>
              <tr class="date-row"><th>Date: DD/MM/YYYY</th></tr>
              <tr><th>Temperature</th></tr>
              <tr colspan={2}>
                <th>Min</th>
                <th>Max</th>
              </tr>
              <tr>
                <td>{tempObj.temp_min}</td>
                <td>{tempObj.temp_max}</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{tempObj.pressure}</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{tempObj.humidity}</td>
              </tr>
            </table>
          </div>
          <div class="table-1">
            <table class="temp-table" border={1}>
              <tr class="date-row"><th>Date: DD/MM/YYYY</th></tr>
              <tr><th>Temperature</th></tr>
              <tr colspan={2}>
                <th>Min</th>
                <th>Max</th>
              </tr>
              <tr>
                <td>{tempObj.temp_min}</td>
                <td>{tempObj.temp_max}</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{tempObj.pressure}</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{tempObj.humidity}</td>
              </tr>
            </table>
          </div>
          <div class="table-1">
            <table class="temp-table" border={1}>
              <tr class="date-row"><th>Date: DD/MM/YYYY</th></tr>
              <tr><th>Temperature</th></tr>
              <tr colspan={2}>
                <th>Min</th>
                <th>Max</th>
              </tr>
              <tr>
                <td>{tempObj.temp_min}</td>
                <td>{tempObj.temp_max}</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{tempObj.pressure}</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{tempObj.humidity}</td>
              </tr>
            </table>
          </div>
          </div>

     </div>
  
   
  );
}

export default App;
