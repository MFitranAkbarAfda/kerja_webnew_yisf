export default function Supported() {
    const dataLogo = [
        "images/logo/mahadewa.jpg",
        "images/logo/Undip.png",
        "images/logo/buca.png",
    ]
    return (
        <>
            <section className="section pt-0 position-relative pull-top">
                <div className="container">
                    <div className="rounded shadow p-5 bg-white">
                        <div className="row">

                            {
                                dataLogo.map(function(ImgLogo) {
                                    return(
                                        <div className="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
                                            <img className="img-fluid col-md-6" src={ImgLogo} />
                                        </div>
                                    )
                                }) 
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}