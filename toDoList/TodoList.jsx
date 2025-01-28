import React, { useState } from 'react'

function TodoList() {

    const [activity, setActivity]=useState("")
    const [list,setList]=useState([])

    function addActivity(){

        if (activity.trim() === '') {
            alert("enter activity") 
            return; 
          }
       
        setList((list)=>{

            const updatedList=[...list,activity]
            console.log(updatedList)
            setActivity("")
            return updatedList
        })
     
    }

    function removeActivity(i){
        const updatedListData=list.filter((ele,id)=>{
            return id!=i;
        })

        setList(updatedListData)
    }
    
    function removeall(){
        setList([]);
    }

  return (
    <>
    
    <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type="text" placeholder="add activity" value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <h5 className='list-heading'>Here is your list{" :)"}</h5>
        {list.length>0 && list.map((data,i)=>{
            return(
            <>
            <div key={i}>
            <div className='listData'>{data}</div>
            <div className='btn-postion'><button onClick={()=>removeActivity(i)}>remove</button></div>
            </div>
            </>
            )
        })}

        

        {list.length>=1 && <button className='all-btn' onClick={removeall}>remove All</button> }
        {list.length>0 &&  <p className='count-task'>tasks: {list.length}</p> }
        
    </div>
    </>
  )

}

export default TodoList