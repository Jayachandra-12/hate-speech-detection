import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

function Hate() {
    const [ans, setAns] = useState("Predicted result will be displayed here")
    const [data, setData] = useState("")
    const f = async() => {
        let x = {"data" : data}
        const res= await axios.post("http://localhost:5000/predict",x);
        setAns(res.data)
        console.log(ans)
    }

    return (
        <div>
            <div className='container'>
                <h2 className='text-center m-4'>Hate Speech Detection</h2>
                <form className='col-10 col-sm-8 col-md-6 form mx-auto border border-dark p-4 text-center'>
                    <div>
                        Enter text :
                        <br />
                        <input type="text" name="hatetext" id="hatetext" className='w-75' onChange={(e) => setData(e.target.value)} />
                    </div>
                    <button type='button' className='btn btn-success w-50 mt-3 text-center' onClick={f}>Submit</button>
                    <br />
                    <p className="display-5">{ans}</p>
                </form>
            </div>
        </div>
    )
}

export default Hate;