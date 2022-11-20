import CategoriesItems from "./CategoriesItems"

export default function Categories() {
    return (
        <>
            <section className="service section bg-gray">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Categories</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">

                        <div className="col-lg-4 align-self-center">
                            {/* <!-- Feature Image --> */}
                            {/* <div class="service-thumb left" data-aos="fade-right"> */}
                                <img className="img-fluid" src="images/vektor/categories.png" alt="iphone-ipad" />
                            {/* </div> */}
                        </div>

                        <div className="col-lg-8 mr-auto align-self-center">
                            <div className="service-box">
                                <div className="row align-items-center">


                                        <CategoriesItems
                                            icon = "ti-id-badge"
                                            title = "Social Science"
                                            text = "Social science examines the relationships between individuals and societies."
                                        
                                        />

                                        
                                        <CategoriesItems 
                                            icon = "ti-image"
                                            title = "Environmental Science"
                                            text = "Environmental science is the study of living organisms and how they interact with our environment."
                                        
                                        />

                                        
                                        <CategoriesItems 
                                            icon = "ti-pencil-alt"
                                            title = "Innovation Science"
                                            text = "Innovation Science: An Emerging Field – The first, and most classic, is the “locus” of innovation – i.e., the object of analysis that is to be improved through innovative activity."
                                        
                                        />

                                        
                                        <CategoriesItems 
                                            icon = "ti-hand-open"
                                            title = "Life Sciences"
                                            text = "In medical terms, life science is defined as a science that demands a systematic and holistic study of living organisms, with a focus on producing various scientific breakthroughs."
                                        
                                        />

                                        <CategoriesItems 
                                            icon = "ti-pulse"
                                            title = "Enginnering"
                                            text = "Engineering science is an interdisciplinary field bridging the gap between scientific theory and engineering applications."                                        
                                        />


                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}