export default function CategoriesItems(props) {
    const ClassIcon = props.icon
    return (
        <>
            <div className="col-md-6 col-xs-12">
                <div className="service-item">
                    <i className={ClassIcon}></i>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}