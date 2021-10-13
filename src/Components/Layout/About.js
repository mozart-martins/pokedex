import Breadcrumb from "./Breadcrumb"

const aboutStyle = {
    "minHeight": "30vh"
}

const About = () => {
    return (
        <div className="bg-danger text-dark" style={aboutStyle}>
            <Breadcrumb location="about"/>
            <h1>Sobre</h1>
            <p>Criado por Mozart Dias Martins com a finalidade de exercitar os conhecimentos adquiridos com React.js</p>
            <p>Esta aplicação tende a ser atualizada de maneira esparsa</p>
            <p>Qualquer dúvida ou sugestão, favor enviar e-mail para mozart.dias.martins@gmail.com</p>
        </div>
    )
}

export default About