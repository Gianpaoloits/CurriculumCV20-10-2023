import { personaType, livelloLingua, esperienzaPersona, personaHobby } from './ProfiloProps';
import { person, lingueTotali, esperiezeTotali, hobbyTotali } from './ProfiloData';

function Profilo() {
    return (
        <div className="card">
            <h1>Profilo</h1>
            <p>Nome: {person.nome}</p>
            <p>Cognome: {person.cognome}</p>
            <img src={person.imgProfilo} alt={`${person.nome} ${person.cognome}`} width={200} />
            <p>Età: {person.eta}</p>
            <p>Sesso: {person.sesso}</p>
            <p>Residenza: {person.residenza}</p>
            {person.numeroDiTelefono && <p>Numero di Telefono: {person.numeroDiTelefono}</p>}
            <h2>Lingue</h2>
            <ul>
                {lingueTotali.map((lingua: livelloLingua, index: number) => (
                    <li key={index}>{lingua.lingua} - Livello: {lingua.livelloLingua}</li>
                ))}
            </ul>
            <h2>Esperienze Lavorative</h2>
            <ul>
                {esperiezeTotali.map((esperienza: esperienzaPersona, index: number) => (
                    <li key={index}>
                        {esperienza.tipoDiImpiego} presso {esperienza.datoreDiLavoro} ({esperienza.annoInizio} - {esperienza.annoFine})
                    </li>
                ))}
            </ul>
            <h2>Hobby</h2>
            <ul>
                {hobbyTotali.map((hobby: personaHobby, index: number) => (
                    <li key={index}>{hobby.hobby}</li>
                ))}
            </ul>
        </div>
    );
}

export default Profilo;
