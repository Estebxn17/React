
function PrimerComponente (){
    
}
    
function SegundoComponete (){
    
    return (
        <>
        
        </>
    )
}

function Nav (){
    return (
        <>
        <nav className = "barra">
        <ul className = "elemetos-barra">
            <div className = "icono">
            Flying Sneakers
            </div>
        
        </ul>
        </nav>
        </>
    )
}

function Contenedor1(){
    return(
        <>
        <main className = "contenedor1">
        <Encabezado/>
        </main>
        
        </>
    )
}

function Contenedor2 (){
    return (
        <>
        <div className = "Informacion1">
            <h1> -- Informacion -- </h1>
        </div>
        <header className = "contenedor2">
            
        <Parrafos/>
        <Parrafos/>
        <Parrafos/>
        </header>
        </>
    )
}

function Contenedor3 (){
    return (
        <>
        <div className = "Informacion2">
            <h1> -- Productos Destacados -- </h1>
            </div>
        <header className = "contenedor3">
            <Targeta/>
            <Targeta/>
            <Targeta/>
            <Targeta/>
            <Targeta/>
            
        </header>
        </>
        
    )
}

function Targeta (){
    return(
        <>
        <div className = "Targeta">
            <Titulos/>
            <div className = "Imagenes">1</div>

            <Botones/>
            
        </div>

        </>
        
    )
}

function Footer(){
    return(
<>
<footer className = "footer">
<div className = "Contactos">
    <div className = "Facebook">
    <i class="fa-brands fa-facebook"></i>
    </div>
    <div className = "Github">
    <i class="fa-brands fa-github"></i>
    </div>
    <div className = "Instagram">
    <i class="fa-brands fa-instagram"></i>
    </div>
    <div className = "Twitter">
    <i class="fa-brands fa-twitter"></i>
    </div>
    <div className  = "anuncio1">
    <h2 className ="texto2">Todos lo derechos reservados @Estebxn</h2>
    </div>
    </div>
    

</footer>
</>

    )
}

function Titulos(){
    return (
        <>
        <h1 className = "Titulo">Zapatillas-1</h1>
        </>
        
    )
}

function Botones(){
    return(
        <>
        <button className = "Botones">Comprar</button>
        </>
    )
}

function Encabezado(){
    return(
        <>
        <h1 className = "Encabezado">Bienbenido   Tu Web De Compras De Confianza</h1>
        </>
    )
}

function Parrafos(){
   return(
    <>
    <section className = "descripcion">
        <Encabezado2/>
    <p>Pasando a la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de tipografía Letraset, que lo utilizó en sus campañas publicitarias. Letraset ofrecía páginas de Lorem Ipsum como hojas de transferencia, que fueron ampliamente utilizadas en la era anterior a los ordenadores para los diseños. Estas páginas de transferencia, conocidas como Letraset Body Type, se incluyeron en la publicidad de la compañía y en su popular catálogo.
</p>
    </section>
    </>
   )
}

function Encabezado2 (){
    return(
        <>
        <h1 className = "Encabezado2">Informacion</h1>
        </>
    )
}

const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(

        <>  
        <PrimerComponente />
        <SegundoComponete/>
        <Nav />
        <Contenedor1/>
        <Contenedor2/>
        <Contenedor3/>
        <Footer/>
        </>
    );
