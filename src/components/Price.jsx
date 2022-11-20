import PriceItems from "./PriceItems"

export default function Price() {
    return (
        <>
            <section className="feature section pt-0">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <PriceItems 
                                card = "b-price p-blue"
                                ctitle = "w_title"
                                list = "li-price"
                                title = "Online Competition"
                                price = "Rp.850,000"
                                link = "https://docs.google.com/forms/d/e/1FAIpQLSeBRw19Bm-cxPotCP2I1hEXoqRtRy-JWqyCk1Y96fqCD4Q9Qw/closedform"
                            />
                        </div>

                        <div className="col-md-6">
                            <PriceItems 
                                card = "b-price"
                                ctitle = "b_title"
                                list = "li-pricew"
                                title = "Offline Competition"
                                price = "Rp.2.500.000"
                                link = "https://docs.google.com/forms/d/e/1FAIpQLSeBRw19Bm-cxPotCP2I1hEXoqRtRy-JWqyCk1Y96fqCD4Q9Qw/closedform"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}