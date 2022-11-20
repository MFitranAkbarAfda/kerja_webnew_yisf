import NewsList from "./NewsList"

export default function News() {
    return (
        <>
            <section class="section testimonial" id="testimonial">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="testimonial-slider owl-carousel owl-theme">
                                
                                <NewsList 
                                    img = "images/team/news1.jpg"
                                    title = "IYSA FESTIVAL 2021, Has Been Successfully Carried Out!!"
                                    desc = "Indonesian Young Scientist Association (IYSA) cooperated between BUCA IMSEF"
                                    time = "Event 2021"
                                    link = "/news1"
                                />
                                <NewsList 
                                    img = "images/team/news2.jpg"
                                    title = "2 Tim FT UNNES Raih Juara Lomba Youth International Science Fair 2021"
                                    desc = "Universitas Negeri Semarang (UNNES)"
                                    time = "Event 2021"
                                    link = "/news2"
                                />
                                <NewsList 
                                    img = "images/team/news1.jpg"
                                    title = "Fakultas Teknik Raih Triple Gold Medals di Youth International Science Fair"
                                    desc = "Universitas Brawijaya (FT UB)"
                                    time = "Event 2021"
                                    link = "/news3"
                                />
                                <NewsList 
                                    img = "images/team/news2.jpg"
                                    title = "MTsN 6 Sleman Raih 4 Medali Emas dan 1 Special Award YISF"
                                    desc = "MTsN 6 Sleman"
                                    time = "Event 2021"
                                    link = "/news4"
                                />
                                <NewsList 
                                    img = "images/team/news1.jpg"
                                    title = "YOUTH NATIONAL SCIENCE FAIR AND YOUTH INTERNATIONAL SCIENCE FAIR 2022"
                                    desc = "YISF & YNSF 2022"
                                    time = "Event 2022"
                                    link = "/news5"
                                />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}