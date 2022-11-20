import "./css/Document.css";


export default function CurationNavbar(props) {

    return (
        <>
            <div className="col-md-2">
                <a href={props.link} className="link-ctr">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">{props.text}</h4>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}