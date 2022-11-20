export default function NewsList(props) {
    return (
        <>

            <div className="card mr-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        {/* <img src="images/team/news.jpg" className="img-fluid" alt="" /> */}
                        <img src={props.img} className="img-fluid" alt="" />

                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p class="card-text">{props.desc}</p>
                            <p class="card-text"><small class="text-muted">{props.time}</small></p>
                            <a href={props.link} className="btn btn-primary btn-sm mt-3">View</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}