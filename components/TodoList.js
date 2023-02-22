import React from 'react'
import {collection, onSnapshot,orderBy,query} from "@firebase/firestore";
import { useEffect,useState } from 'react';
import { db } from '../firebase';
const TodoList = () => {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    const collectionRef = collection(db, "todos")
    const q = query( collectionRef, orderBy("timestamp","desc"));
    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
        setTodos(querySnapshot.docs.map(doc=>({...doc.data(),id: doc.id, timestamp: doc.data().timestamp?.toDate().getTime()

        })))
    });
return unsubscribe;
  },[])
  return (
    <div className='h-[600px] bg-scroll bg-lime-300 container  overflow-y-scroll'>
        {todos.map(todo => 
            <div key={todo.id} className="container mt-2 py-4 rounded-2xl shadow-xl max-w-md bg-slate-500">
                <h1 className='mb-2 text-3xl font-bold'>{todo.title}</h1>
                <h1 className='mb-2'>{todo.detail}</h1>
            </div>
            
            )}
    </div>
  )
}

export default TodoList
