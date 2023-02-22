import { db } from '../firebase'
import { collection, serverTimestamp,addDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
const TodoForm = () => {
    const [todo,setTodo] = useState({title:'',detail: ''})
    const onSubmit = async () => {
        const collectionRef = collection(db, "todos")
        const docRef = await addDoc(collectionRef, {...todo,timestamp:
        serverTimestamp( ) })
        setTodo({title:'',detail:''})
        alert(`Todo with id ${docRef.id} is added succecfully`)
    }
  return (
    <div className='container max-w-md mb-10'>
    <pre>{JSON.stringify(todo)}</pre>
    Judul
  <input type="title" name="title" label="title"
  value={todo.title}
  onChange={e => setTodo({...todo, title: e.target.value})} 
  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="isi kegiatanmu" />
  Detail
  <input type="detail" name="detail" label="detail"
  value={todo.detail} 
  onChange={e => setTodo({...todo, detail: e.target.value})}
  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="detail kegiatan" />
  <button onClick={onSubmit} className='px-2 py-2 rounded-lg bg-sky-600 mt-2 text-white font-bold hover:bg-sky-500'>Tambah</button>
  </div>
  )
}

export default TodoForm