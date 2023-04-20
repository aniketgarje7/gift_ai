import Link from "next/link";

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="">
                <div className="bg-footer container-fluid">
                    <div>
                        <div className="footer-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">© 2023 Gift.ai | All Rights Reserved</div>
                                    <div className="col-md-6 text-end" id="footer-link-parent">
                                        <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
                                        <span className="mx-3"> |</span>
                                        <Link href="/term-use" className="footer-link">Terms of Use</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;