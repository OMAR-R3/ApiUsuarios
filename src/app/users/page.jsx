import axios from "axios";
import Link from 'next/link';
async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;

}

export default async function Usuarios() {
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
    const usuarios = await getUsers();
    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Usuarios</h1>
            <table className="table" style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={tabEncabezado}>Id</th>
                        <th style={tabEncabezado}>Nombre</th>
                        <th style={tabEncabezado}>Usuario</th>
                        <th style={tabEncabezado}>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i) => (
                        <tr key={i} style={i % 2 === 0 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: '#ffffff' }}>
                            <td style={tabstyle2}>{i + 1}</td>
                            <td style={tabstyle2}>
                                <Link href={`/users/${usuario.name}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>
                                    {usuario.name}
                                </Link>
                            </td>
                            <td style={tabstyle2}>{usuario.username}</td>
                            <td style={tabstyle2}>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    );
}