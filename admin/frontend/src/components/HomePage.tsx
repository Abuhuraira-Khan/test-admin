import React, { useEffect, useReducer, useState } from "react";



// Define the initial state type
interface State {
    heroSec: {
        _id:any,
        section:string,
        welcomeText: string;
        introText: string;
    },
    aboutSec:{
        _id:any,
        section:string,
        myPic:string,
        aboutMe:string
    },
    serviceSec:{
        _id:any,
        section:string,
        all_services:[]
    },
    serviceSecObj:{
        _id:any,
        image:string,
        title:string,
        description:string
    }
    mySkills:{
        _id:any,
        section:string,
        front_end:[],
        back_end:[]
    },
    mySkillObj:{
        _id:any,
        type:string,
        name:string,
        parcent:number
    }
}

// Define the action types
type Action =
    | { type: 'changeHeroSecText'; value: { welcomeText?: string; introText?: string } }
    | { type: 'changeAboutSecDetails'; value: { [key: string]: string } }
    | { type: 'AddNewService'; value: { [key: string]: string } }
    | { type: 'addNewSkill'; value: { [key: string]: string } }
    | { type: 'addSkillType'; value: string }
    | { type: 'getAllSkills'; value:{[key: string]: string } }
    | { type: 'getAllServices'; value:{[key: string]: string } }
    | { type: 'getAboutSecDetails'; value:{[key: string]: string } };

// Define the initial state
const initialState: State = {
    heroSec: {
        _id:'',
        section:'hero_sec',
        welcomeText: '',
        introText: ''
    },
    aboutSec:{
        _id:'',
        section:'about_sec',
        myPic:``,
        aboutMe:``
    },
    serviceSec:{
        _id:'',
        section:'service_sec',
        all_services:[]
    },
    serviceSecObj:{
        _id:'',
        image:'',
        title:'',
        description:''
    },
    mySkills:{
        _id:'',
        section:'skill_sec',
        front_end:[],
        back_end:[]
    },
    mySkillObj:{
        _id:'',
        type:"",
        name:"",
        parcent:0,
    }
};

// Define the reducer function
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'changeHeroSecText':
            return {...state,heroSec: {...state.heroSec,...action.value}};
        case  'changeAboutSecDetails':
            return {...state,aboutSec:{...state.aboutSec,...action.value}}
        case  'AddNewService':
            return {...state,serviceSecObj:{...state.serviceSecObj,...action.value}}
        case  'getAllServices':
            return {...state,serviceSec:{...state.serviceSec,...action.value}}
        case  'addNewSkill':
            return {...state,mySkillObj:{...state.mySkillObj,...action.value}}
        case  'addSkillType':
            return {...state,mySkillObj:{...state.mySkillObj,type:action.value}}
        case  'getAllSkills':
            return {...state,mySkills:{...state.mySkills,...action.value}}
        case  'getAboutSecDetails':
            return {...state,aboutSec:{...state.aboutSec,...action.value}}
        default:
            return state;
    }
};

const HomePage = () => {
    // Initialize the reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    // intialize state
    const [isEditingService, setIsEditingService] = useState(false);

    const apiUrl = 'http://localhost:1000';

    // handle hero sec
    const handleHeroSecChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({ type: 'changeHeroSecText', value: { [e.target.name]: e.target.value } });
    };
    
   const handleHeroSecBtnClick = async ()=>{
    const res = await fetch(`${apiUrl}/home/herosecText`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            ...state.heroSec
        })
    })

    if(res){
        console.log("ok")
    }

   }

   // handle about sec
   const handleAboutMeChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.type === 'file') {
        const fileInput = e.target as HTMLInputElement;
        if (fileInput.files) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    dispatch({ type: 'changeAboutSecDetails', value: { [e.target.name]: reader.result as string } });
                }
            };
            reader.readAsDataURL(file);
        }
    } else {
        dispatch({ type: 'changeAboutSecDetails', value: { [e.target.name]: e.target.value } });
    }
  };
  
  const handleAboutMeBtnClick = async ()=>{
    const res = await fetch(`${apiUrl}/home/aboutSecDetails/${state.aboutSec._id.length===0?'undefined':state.aboutSec._id}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            ...state.aboutSec
        })
    })

    if(res){
        console.log("ok")
    }
  }
  useEffect(() => {
    const getAboutSecDetails = async ()=>{
        const res = await fetch(`${apiUrl}/home/getAboutSecDetails/${state.aboutSec.section}`)
        const result = await  res.json();
        dispatch({type:'getAboutSecDetails',value:result})
    }
    getAboutSecDetails();
    return () => {
        dispatch({type:'getAboutSecDetails',value:{}})
    }
  }, [])
  

  // handle service section
  const handleServiceSecChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
    if (e.target.type === 'file') {
        const fileInput = e.target as HTMLInputElement;
        if (fileInput.files) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    dispatch({ type: 'AddNewService', value: { [e.target.name]: reader.result as string } });
                }
            };
            reader.readAsDataURL(file);
        }
    } else {
        dispatch({ type: 'AddNewService', value: { [e.target.name]: e.target.value } });
    }
    console.log(state.serviceSecObj.image)
  }
  const handleServiceBtnClick = async ()=>{
        const res = await fetch(`${apiUrl}/home/addNewService/${state.serviceSec._id.length===0?undefined:state.serviceSec._id}&${isEditingService}`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                state.serviceSec._id.length===0?state.serviceSec:state.serviceSecObj
            )
        })

    if(res){
        console.log("ok")
    }
  }
  useEffect(() => {
    const getAllServices = async ()=>{
        const res = await fetch(`${apiUrl}/home/getAllServices/${state.serviceSec.section}`)
        const result = await res.json()
        dispatch({ type: 'getAllServices', value:result})
    }
    getAllServices();
    return () => {
        dispatch({ type: 'getAllServices', value:{}})
    }
  }, [])
  const handleServiceDeleteBtnClick = async (id:string) => {
    const res = await fetch(`${apiUrl}/home/deleteService/${state.serviceSec._id}&${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    if(res){
        console.log("ok");
    }
  }


  // handle skill section
  const handleSkillSecChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch({type:'addNewSkill',value:{[e.target.name]:e.target.value}})
    console.log(state.mySkillObj)
  }
  const handleAddNewSkillBtnClick = async ()=>{
    if(state.mySkillObj.type.length==0){
        alert('select skill type')
    }
    else{
        const res = await fetch(`${apiUrl}/home/addNewSkill/${state.mySkills._id.length===0?undefined:state.mySkills._id}`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                state.mySkills._id.length===0?state.mySkills:state.mySkillObj
            )
        });
        if (res) {
            console.log("ok");
        }
    }
  }
  useEffect(() => {
    const getAllSkill = async ()=>{
        const res = await fetch(`${apiUrl}/home/getAllSkill/${state.mySkills.section}`)

        const result = await res.json();
        dispatch({type:'getAllSkills',value:result})
    }
    getAllSkill();
  
    return () => {
        dispatch({type:'getAllSkills',value:{}})
    }
  }, [])
  const handleSkillDeleteBtnClick = async () => {
        const res = await fetch(`${apiUrl}/home/deleteSkill/${state.mySkills._id}&${state.mySkillObj._id}&${state.mySkillObj.type}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        if(res){
            console.log("ok");
        }
  }


  return (
    <div className="w-[80%] bg-slate-200 p-2">
        <div id="fullHomePgae_wrapper">
            {/* homapage header section */}
            {/* homapage hero section */}
            <div id="h_hero_sec" className="w-full h-full">
                <h1 className=" text-center">Hero section</h1>
                <div className="w-1/2 translate-x-1/2">
                    <label htmlFor="hero_welcome_text">hero welcome text</label>
                    <textarea onChange={handleHeroSecChange} name="welcomeText" id="hero_welcome_text" className="w-full"></textarea>
                    <label htmlFor="hero_into_text">hero into text</label>
                    <textarea onChange={handleHeroSecChange} name="intoText" id="hero_into_text" className="w-full h-48"></textarea>
                    <button onClick={handleHeroSecBtnClick} className="px-2 py-1 bg-blue-500 text-white">send</button>
                </div>
            </div>
            {/* homapage about section */}
            <div id="h_about_sec">
                <h1 className="text-center">About section</h1>
                <div className="w-1/2 translate-x-1/2">
                    <div className="w-44 h-44">
                        <input onChange={handleAboutMeChange} name="myPic" className=" absolute" type="file" />
                        <img className="w-full h-full object-cover" src={state.aboutSec.myPic} alt="" />
                    </div>
                    <label htmlFor="about_me_text">about me text</label>
                    <textarea onChange={handleAboutMeChange} value={state.aboutSec.aboutMe} name="aboutMe" id="hero_into_text" className="w-full h-48"></textarea>
                    <button onClick={handleAboutMeBtnClick} className="px-2 py-1 bg-blue-500 text-white">send</button>
                </div>
            </div>
            {/* homapage projects section */}
            <div id="h_projects_sec">
                <h1>porjects section</h1>
            </div>
            {/* homapage services section */}
            <div id="h_services_sec">
                <h1 className="text-center">services section</h1>
                <div className="w-1/2 translate-x-1/2 mb-5 flex flex-col gap-5">
                {state.serviceSec.all_services.map((service,idx)=>{
                    return(
                     <div onClick={()=>{dispatch({ type: 'AddNewService', value:service}); setIsEditingService(true) }} key={idx} className="p-2 bg-blue-700 text-white relative">
                        <button onClick={()=>{handleServiceDeleteBtnClick(service._id)}} className=" bg-red-500 absolute py-1 px-2 top-3 right-3">D</button>
                        <img width={50} height={50} src={service.image} alt="" />
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                    )
                })}
                </div>
                <div className="w-1/2 translate-x-1/2 mb-5">
                    <div className={`w-full flex flex-col gap-3`}>
                        <input onChange={handleServiceSecChange} value={state.serviceSecObj.title} className="w-1/2 block" type="text" name="title"placeholder="title" />
                        <input onChange={handleServiceSecChange} className="w-1/2 block" type="file" name="image"  />
                        <textarea onChange={handleServiceSecChange} value={state.serviceSecObj.description} className="w-1/2 block" name="description" id=""></textarea>
                        <button onClick={handleServiceBtnClick} className="px-2 py-1 hover:bg-red-400 bg-red-500 text-white">{isEditingService?'save edit':'add new services'}</button>
                        <button onClick={()=>{dispatch({ type: 'AddNewService', value:{title:'',image:'',_id:'',description:''}}); setIsEditingService(false)}} className={`px-2 py-1 ${isEditingService?'':'hidden'} hover:bg-red-400 bg-red-500 text-white`}>discard</button>
                    </div>
                </div>
            </div>
            {/* homapage skills section */}
            <div id="h_skills_sec">
                <h1 className="text-center">skills section</h1>
                <div className="w-1/2 translate-x-1/2 mb-5">
                  {/* front end skill */}
                  <div className="w-1/2  inline-block border-r-2 border-red-500 p-1 mb-5">
                    <h3 className="text-center">front end</h3>
                    <div className="flex gap-2 text-white">
                        {state.mySkills.front_end.map((skill,idx)=>{
                            return(
                                <div onClick={()=>{dispatch({type:'addNewSkill',value:skill})}} key={idx}className="bg-blue-700 py-1 px-2">
                                    <h4>{skill.name}</h4>
                                    <p >{skill.parcent}%</p>
                                </div>
                            )
                        })}
                    </div>
                  </div>
                  {/* back end skill */}
                  <div className="w-1/2  inline-block border-l-2 border-red-500 p-1 mb-5">
                    <h3 className="text-center">back end</h3>
                    <div className="flex gap-2 text-white">
                    {state.mySkills.back_end.map((skill,idx)=>{
                            return(
                                <div onClick={()=>{dispatch({type:'addNewSkill',value:skill})}} key={idx} className="bg-blue-700 py-1 px-2">
                                    <h4>{skill.name}</h4>
                                </div>
                            )
                        })}
                    </div>
                  </div>
                  {/* add new skill */}
                  <div className="mb-5">
                    <div className="flex gap-3">
                        <span onClick={()=>{dispatch({type:'addSkillType',value:'frontend'})}} className={`border-2 ${state.mySkillObj.type=='frontend'?'border-blue-800':'border-blue-200'} p-1`}>front end</span>
                        <span onClick={()=>{dispatch({type:'addSkillType',value:'backend'})}} className={`border-2 ${state.mySkillObj.type=='backend'?'border-blue-800':'border-blue-200'} p-1`}>back end</span>
                    </div>
                    <div className="mt-2">
                        <input onChange={handleSkillSecChange} value={state.mySkillObj.name} name="name" className="block mb-1" type="text" placeholder="Skill Name" />
                        <input onChange={handleSkillSecChange} value={state.mySkillObj.parcent} name="parcent" className={`block mb-1 ${state.mySkillObj.type=='backend'?'hidden':''}`}  type="text" placeholder="Skill Parcent" />
                        <button onClick={handleAddNewSkillBtnClick} className="mr-1 px-2 py-1 hover:bg-red-400 bg-red-500 text-white">add</button>
                        <button onClick={handleSkillDeleteBtnClick} className="mr-1 px-2 py-1 hover:bg-red-400 bg-red-500 text-white">delete</button>
                    </div>
                  </div>
                </div>
            </div>
            {/* homapage contact section */}
            <div id="h_contact_sec">
                <h1>Contact section</h1>
            </div>
        </div>      
    </div>
  )
}

export default HomePage
