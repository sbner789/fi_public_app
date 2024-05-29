import { useEffect } from 'react';
import './App.css';
import CommonApiService from "./api/api-service"

function App() {

  useEffect(() => {
    const getTestApi = async () => {
      const response = await CommonApiService.getDefault()
      console.log("hello",response.data)
    }
    getTestApi()
  })

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
