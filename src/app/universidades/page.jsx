import axios from "axios";

async function getNoticias() {
    const url = "http://universities.hipolabs.com/search?country=Mexico";
    const universidades = await axios.get(url);
    //console.log(universidades.data);
    return universidades.data;

}

export default async function Universidades() {
    const tabEncabezado = {
        padding: '10px',
        border: '1px solid #ccc',
        textAlign: 'left',
        fontWeight: 'bold',
        backgroundColor: '#ddd',
    };
    
    const tabstyle2 = {
        padding: '10px',
        border: '1px solid #ccc',
    };
    
    const universidades = await getNoticias();
    return (
        <>
    <h1 style={{ textAlign: 'center', color: '#333' }}>Universidades</h1>
    <table className="table" style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse' }}>
        <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={tabEncabezado}>Id</th>
                <th style={tabEncabezado}>Universidad</th>
                <th style={tabEncabezado}>Sitio Web</th>
            </tr>
        </thead>
        <tbody>
            {universidades.map((universidad, i) => (
                <tr key={i} style={i % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: '#ffffff' }}>
                    <td style={tabstyle2}>{i + 1}</td>
                    <td style={tabstyle2}>{universidad.name}</td>
                    <td style={tabstyle2}>
                        <a href={universidad.web_pages[0]} target="_blank" rel="noopener noreferrer" style={{ color: '#1a73e8', textDecoration: 'none' }}>
                            {universidad.web_pages[0]}
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</>
    );
}