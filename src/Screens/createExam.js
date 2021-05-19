import React,{useState} from 'react'
import QuestionPaper from './QuestionPaper'

const  CreateExam =()  =>{
    const [next,setNext]= useState(false)
    // const [title ,setTitle] =useState()
    // const [des ,setDes] =useState()
    return (
        
        next?
        <QuestionPaper/> 
        
        :
        <form>
            <div class="form-group">
            <label for="exampleFormControlInput1">Exam Title</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Exam title" required=" " />
            </div>
            {/* <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div> */}
            <div class="form-group">
                <label for="exampleFormControlTextarea1">description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required=" " ></textarea>
            </div>

            <button className="btn btn-block btn-primary" onClick={()=>setNext(1)}>Next</button>
        </form>
       
    )
}

export default CreateExam