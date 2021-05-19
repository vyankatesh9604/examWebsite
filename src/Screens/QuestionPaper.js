import React ,{useState}from 'react'
import TimePicker from 'react-time-picker';

const QuestionPaper = () => {
    const [value, onChange] = useState('10:00');
    
    const [question,setQuestion]=useState('')
    const [Allquestion,setAllQuestion]=useState([])
    const [options,setOptions] = useState({
        o1:'',
        o2:'',
        o3:'',
        o4:''
    })
    console.log(value)
    const [mark,setMark] = useState(0)
    const [correctoption,setCorrectOption]=useState(1)

    const updateOption =(option,index)=>{
        
        index === 0?setOptions({...options,o1:option}): index === 1?setOptions({...options,o2:option}): index === 2?setOptions({...options,o3:option})
        :setOptions({...options,o4:option})

    }

    const AddQuestion = (e) => {
        e.preventDefault()
        if (question ===''|| options.o1 === ''||options.o2 === ''||options.o3 === ''||options.o4 === ''){
            alert('please provide all field')
        }else{
        setAllQuestion([...Allquestion,{question,options,mark,correctoption}])
        console.log(Allquestion)
        }
        
    }

    return (
        <form>
            <div class="form-group">
            <label for="exampleFormControlInput1">Question</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Question" value={question} onChange={(e)=>setQuestion(e.target.value)} required=" "/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter Answer" value={options.o1} onChange={(e)=>updateOption(e.target.value,0)} required=" "/>
            </div>
            <div class="form-group">
            
                <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter Answer" value={options.o2} onChange={(e)=>updateOption(e.target.value,1)} required=" "/>
            </div>
            <div class="form-group">
            
                <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="Enter Answer" value={options.o3} onChange={(e)=>updateOption(e.target.value,2)} required=" "/>
            </div>
            <div class="form-group">
            
             <input type="text" class="form-control" id="exampleFormControlInput5" placeholder="Enter Answer" value={options.o4} onChange={(e)=>updateOption(e.target.value,3)} required=" "/>
            </div>
            <div class="form-group">
            
            <input type="number" class="form-control" id="exampleFormControlInput5" placeholder="Enter marks of question" value={mark} onChange={(e)=>setMark(e.target.value)}/>
           </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1"> select correct option</label>
                <select class="form-control" id="exampleFormControlSelect1"value={correctoption} onChange={(e)=>setCorrectOption(e.target.value)}>
                    <option value={'o1'}>1</option>
                    <option value={'o2'}>2</option>
                    <option value={'o3'}>3</option>
                    <option value={'o4'}>4</option>
                </select>
            </div>
            <div className="row">
                <div className='col'>
                <h4>Select start time </h4>
                <TimePicker
                    onChange={onChange}
                    value={value}
                />
                </div>
               <div className="col">
               <h4>Select End  time </h4>
                <TimePicker
                    onChange={onChange}
                    value={value}
                />
               </div>
               
            </div>
           
            <button className="btn btn-block btn-primary mt-4" onClick={(e)=>AddQuestion(e)}>Add question </button>
            <button className="btn btn-block btn-primary" >finish question </button>
        </form>
    )
}
export default QuestionPaper