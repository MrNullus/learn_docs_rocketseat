import { Card } from '../../components/Card';

import './style.css';


export function Home() {
  const [studentName, setStudentName] = useState("");


  return (
    <div className="container">
      <h1>Lista de Presença</h1>

      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={( e ) => setStudentName(e.target.value)}
      />

      <button type="button">
        Adicionar
      </button>

      <Card 
        name="Gustavo H. J." 
        time="00:00:00" 
      />

      <Card 
        name="Klateia" 
        time="12:23:45" 
      />

      <Card 
        name="Kratus" 
        time="23:34:56" 
      />
    </div>
  );

}
