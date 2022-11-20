import "./css/ButtonItems.css";

export default function ButtonItems(props) {
    const classButton = "btn " + props.class;
    return (
        <>
            <div>
                <a href={props.link} className={classButton}>{props.text}</a>
            </div>
        </>
    )
}