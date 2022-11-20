
function G2021() {

    
    const DataLogo = [
        "images/gallery/2021/01.jpg",
        "images/gallery/2021/01.jpg",
        "images/gallery/2021/01.jpg"
    ]

    return (
        <>

            <div className="section">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <h1 className="text-center">2021</h1>

                        <div className="row">

                            {
                                DataLogo.map(function(Gimg21) {
                                    return(
                                        <div className="col-md-2">
                                            <div className="card">
                                                <img className="" src={Gimg21}></img>
                                            </div>
                                        </div>
                                    )
                                    
                                }) 
                                
                            }

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default G2021;