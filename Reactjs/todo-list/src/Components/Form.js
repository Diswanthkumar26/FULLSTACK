import { useRef, useState } from "react";
import SimpleReactValidator from 'simple-react-validator';
export function Form() {
    const[useForm,setuseForm] = useState({
        Name: "",
        DOB: "",
        Email: "",
        Phoneno: ""
    });

    const [,setUpdate]= useState( );
    const [EditIndex, setEditIndex] = useState(-1);
    const [useList, setList] = useState([{
        Name: "MonkeyD.Luffy",
        DOB: "1998-01-01",
        Email: "kopluffy@gmail.com",
        Phoneno: "9876543210"
    }]);


    const handleOnchange = (event) =>{
        console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        setuseForm({
            ...useForm, [name] : value 
        }) 
    }

    const handleFormSubmit = () => {
        const isValid = validator.current.allValid();
        if (isValid) {
          validator.current.hideMessages();
          console.log("From Submission", useForm);
          if (EditIndex === -1) {
            setList([...useList, useForm]);
          }else{
            useList[EditIndex]=useForm;
            setList([...useList]);
          }
          handleFromReset();
        }else{
            console.log("From field missing");
            validator.current.showMessages();
            setUpdate(1);
        }
    }

    const handleFromReset = () =>{
        setuseForm({
            Name: "",
            DOB: "",
            Email: "",
            Phoneno: ""
        })
    }

    const handleuseEdit = (index) => {
        const user = useList[index];
        setEditIndex(index);
        setuseForm(user);
    }
    const handleuseDelete = (i) => {
        useList.splice(i, 1);
        setList([...useList]);
    }
 

    const validator = useRef(new SimpleReactValidator({
        className : "text-danger"
    }))
    return (
        <div class="container mt-4">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-6">
                    <div class="card">
                        <div class="headin-nav">
                            <div class="col-12">
                                <p class="heading text-center mt-2">From</p>
                            </div>
                        </div>    
                        <div class="row container mt-3">
                            <div class="col-6 mb-3">
                                <div class="mb-0">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" value={useForm.Name} onChange={handleOnchange} placeholder="Enter name" name="Name" />
                                </div>
                                {validator.current.message('Name', useForm.Name, 'required')}
                            </div>
                            <div class="col-6 mb-3">
                                <div class="mb-0">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" value={useForm.DOB} onChange={handleOnchange} placeholder=" " name="DOB" />
                                </div>
                                {validator.current.message('DOB', useForm.DOB, 'required')}
                            </div>
                        </div>
                        <div class="row container">
                            <div class="col-6 mb-3">
                                <div class="mb-0">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" value={useForm.Email} onChange={handleOnchange}  placeholder="Enter email" name="Email" />
                                </div>
                                {validator.current.message('Email', useForm.Email, 'required|email')}
                            </div>
                            <div class="col-6">
                                <div class="mb-0">
                                    <label class="form-label">Phoneno</label>
                                    <input type="tel" class="form-control" value={useForm.Phoneno} onChange={handleOnchange} placeholder="Enter phoneno" name="Phoneno"/>
                                </div>
                                {validator.current.message('Phoneno', useForm.Phoneno, 'required')}
                            </div>
                        </div>
                        <div class="row container mb-2 d-flex justify-content-center align-content-center">
                            <div class="col-6 d-flex justify-content-center align-content-center">
                                <button type="submit"  onClick={handleFormSubmit} class="btn btn-primar me-2">Submit</button>
                                <button type="reset"  onClick={handleFromReset} class="btn btn-dange">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-8 mt-5">
                    <div class="card">
                        <table class="table">
                            <thead class="table-head">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phoneno</th>
                                </tr>
                            </thead>
                            <tbody>
                                {useList.map((data,i)=>
                                <tr>
                                    <th scope="row">{i+1}</th>
                                    <td>{data.Name}</td>
                                    <td>{data.DOB}</td>
                                    <td>{data.Email}</td> 
                                    <td>{data.Phoneno}</td>
                                    <td>
                                        <button onClick={()=>handleuseEdit(i)} class="btn btn-primar btn-xs">
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={()=>handleuseDelete(i)} class="btn btn-dange btn-xs">
                                            Delete  
                                        </button>
                                    </td>  
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}



// export function Form() {
//     const[useForm,setuseForm] = useState({
//         Name: "",
//         DOB: "",
//         Email: "",
//         Phoneno: ""
//     });

//     const handleOnchange = (event) =>{
//         const name = event.target.name;
//         const value = event.target.value;
//         setuseForm({
//             ...useForm, [name] : value 
//         }) 
//     }

//     const validator = useRef(new SimpleReactValidator({
//         className : "text-danger"
//     }))
//     return (
//         <div class="container mt-4">
//             <div class="row d-flex justify-content-center align-content-center">
//                 <div class="col-6">
//                     <div class="card">
//                         <div class="">
//                             <div class="col-12 mb-3">
//                                 <p class="heading text-center">From</p>
//                             </div>
//                         </div>    
//                         <div class="row container">
//                             <div class="col-6 mb-3">
//                                 <div class="mb-0">
//                                     <label class="form-label">Name</label>
//                                     <input type="text" class="form-control"  placeholder="Enter name" name="Name" />
//                                 </div>
//                                 {validator.current.message('Name', useForm.Name, 'required')}
//                             </div>
//                             <div class="col-6 mb-3">
//                                 <div class="mb-0">
//                                     <label class="form-label">DOB</label>
//                                     <input type="date" class="form-control" placeholder=" " name="DOB" />
//                                 </div>
//                             </div>
//                             {validator.current.message('DOB', useForm.DOB, 'required')}
//                         </div>
//                         <div class="row container">
//                             <div class="col-6 mb-3">
//                                 <div class="mb-0">
//                                     <label class="form-label">Email</label>
//                                     <input type="email" class="form-control" placeholder="Enter email" name="Email" />
//                                 </div>
//                                 {validator.current.message('Email', useForm.Email, 'required')}
//                             </div>
//                             <div class="col-6">
//                                 <div class="mb-0">
//                                     <label class="form-label">Phone no</label>
//                                     <input type="tel" class="form-control" placeholder="Enter phone no" name="Phoneno"/>
//                                 </div>
//                                 {validator.current.message('Phoneno', useForm.Phoneno, 'required')}
//                             </div>
//                         </div>
//                         <div class="row container mb-2 d-flex justify-content-center align-content-center">
//                             <div class="col-6 d-flex justify-content-center align-content-center">
//                                 <button type="submit" class="btn btn-primar me-2">Submit</button>
//                                 <button type="reset"class="btn btn-dange">Reset</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }