import { useState, useEffect } from 'react';
import { Card } from '../../components/Card';

import './style.css';


export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]); 
  const [user, setUser] = useState({ name: '', avatar: '' });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {

    async function fetchData() {
      const response = await fetch("https://api.github.com/users/msNullus");
      const { name, avatar_url } = await response.json();
      console.log("DADOS => ", name, " | ", avatar_url);

      setUser({
        name: name,
        avatar: avatar_url
      });
    }
    
    fetchData();
    
  }, []);


  return (
    <main className="container">
      <header>
        <h1>Lista de Presença</h1>

        <div>
          <strong>Ms. Nullus</strong>
          <img src="https://github.com/msNullus.png" alt="Foto de Perfil" />
        </div>
      </header>

      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={( e ) => setStudentName(e.target.value)}
      />

      <button 
        type="button" 
        onClick={handleAddStudent}
      >
        Adicionar
      </button>

      {students.map(({ name, time }) => (
        <Card 
          key={time}
          name={name} 
          time={time} 
        />
      ))}
    </main>
  );

}
