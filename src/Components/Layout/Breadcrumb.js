import { Link } from "react-router-dom"


const Breadcrumb = props => {
    console.log(props.location)
    return (
        <div className="ms-3 p-3">
            <nav aria-label="breadcrumb">
                    { props.location == "home" && <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            Home
                        </li>
                    </ol>}
                    { props.location == "profile" && <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link exact to="/page/0">
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Profile
                        </li>
                    </ol>}
                    { props.location == "about" && <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link exact to="/page/0">
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            About
                        </li>
                    </ol>}
            </nav>
        </div>
    )
}

export default Breadcrumb