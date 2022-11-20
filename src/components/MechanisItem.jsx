import "./css/Mechanis.css";

export default function MechanisItem(props) {

    const classCard = "card-body " + props.color;

    return (
        <>
            <div className="drop-mechanis">

                <div className="card btn-mechanis">

                        <div id="myDropMechanis" className="drop-mechanis-content">
                            <div className={classCard}>
                                <h6 className="card-title">{props.title}</h6>
                                <p className="card-text">{props.text}</p>
                            </div>
                        </div>

                </div>

            </div>
        </>
    )
}