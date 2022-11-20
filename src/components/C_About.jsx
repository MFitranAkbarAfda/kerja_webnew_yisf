import ButtonItems from "./ButtonItems"

export default function C_About() {
    return (
        <>
            <section className="feature section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ml-auto justify-content-center">

                            {/* <!-- About Mockup --> */}

                            {/* <div className="image-content" data-aos="fade-right"> */}
                                <img className="img-fluid" src="images/vektor/background.png" alt="iphone" />
                            {/* </div> */}

                        </div>
                        <div className="col-lg-6 mr-auto align-self-center">
                            <div className="feature-content">

                            {
                                /* <!-- About Title --> */
                            }
                            
                                <h1>Background</h1>
                                <h2>Youth Internasional Science Fair (YISF) </h2>

                            {
                                /* <!-- About Description --> */
                            }

                                <p className="desc">The number of creativity and idea development
                                    makes students produce many products that are
                                    beneficial to society and the environment.
                                    Creativity and the development of ideas as
                                    outlined in the written work requires a place to
                                    evaluate the results.</p>
                                
                                <ButtonItems 
                                    text = "About More"
                                    class = "btn-about-c btn-primary"
                                    link = "/about"
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}