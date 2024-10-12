import axios from "axios";

async function getDatos() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    return response.data;
}

export default async function Usuario({ params }) {

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
    // Decodificar el nombre de la URL
    const nombreDecodificado = decodeURIComponent(params.name);

    // Obtener datos de usuarios
    const usuarios = await getDatos();

    // Filtrar el usuario que coincide con el nombre decodificado
    const usuarioEncontrado = usuarios.filter(usuario => usuario.name === nombreDecodificado);

    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Datos de {nombreDecodificado}:</h1>
            {usuarioEncontrado.length > 0 ? (
                usuarioEncontrado.map((usuario) => (
                    <div key={usuario.id} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
                        <p><strong>ID:</strong> {usuario.id}</p>
                        <p><strong>Nombre:</strong> {usuario.name}</p>
                        <p><strong>Usuario:</strong> {usuario.username}</p>
                        <p><strong>Email:</strong> {usuario.email}</p>
                        <p><strong>Dirección:</strong></p>
                        <table className="table" style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f2f2f2' }}>
                                    <th style={tabEncabezado}>Calle</th>
                                    <th style={tabEncabezado}>Suite</th>
                                    <th style={tabEncabezado}>Ciudad</th>
                                    <th style={tabEncabezado}>Código</th>
                                    <th style={tabEncabezado}>Coordenadas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={tabstyle2}>{usuario.address.street}</td>
                                    <td style={tabstyle2}>{usuario.address.suite}</td>
                                    <td style={tabstyle2}>{usuario.address.city}</td>
                                    <td style={tabstyle2}>{usuario.address.zipcode}</td>
                                    <td style={tabstyle2}>lat: {usuario.address.geo.lat}, lng: {usuario.address.geo.lng}</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Teléfono:</strong> {usuario.phone}</p>
                        <p><strong>Sitio-Web:</strong> {usuario.website}</p>
                        <p><strong>Compañía:</strong></p>
                        <table className="table" style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f2f2f2' }}>
                                    <th style={tabEncabezado}>Nombre</th>
                                    <th style={tabEncabezado}>CatchPhrase</th>
                                    <th style={tabEncabezado}>Bs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={tabstyle2}>{usuario.company.name}</td>
                                    <td style={tabstyle2}>{usuario.company.catchPhrase}</td>
                                    <td style={tabstyle2}>{usuario.company.bs}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            ) : (
                <p style={{ textAlign: 'center', color: '#ff0000' }}>Usuario no encontrado.</p>
            )}
        </>

    );
}

/*
"id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
*/
