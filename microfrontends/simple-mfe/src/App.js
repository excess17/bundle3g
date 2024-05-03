import {useState} from "react";
import './App.css';


const API_HELLO_PATH2 = '/albums'

function App({config}) {
    const {systemParams} = config || {};
    const { api } = systemParams || {};
    
    const url2 = api && api["simple-node-api"].url

    const [payload, setPayload] = useState("")


    async function callTheApi2() {
        try {
            const apiResponse = await fetch(url2 + API_HELLO_PATH2);
            //chiama il microservizio interno, url: simple-node-api e API_HELLO_PATH2 '/api/hello2'
            
            if (apiResponse.ok) {
                const apiJson = await apiResponse.json();
                setPayload(<>{apiJson.object}</>);
            } else {
                setPayload('Server responded with an error');
            }
        } catch (error) {
            setPayload(error.message);
        }
    }


    return (
        <div className="App">
            <div>
                <button onClick={callTheApi2}>Bundle1 calling internal ms</button>
            </div>
            <div>
                <span>{payload}</span>
            </div>
        </div>
    );
}

export default App;

