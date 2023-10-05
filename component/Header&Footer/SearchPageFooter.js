import Link from "next/link";

const SearchPageFooter = ()=>{
    return (
        <div className="container-fluid bg-white">
        <div className="container search-page-footer">
            <div className="row justify-between">
                <div className="col-md-4"></div>
                <div className="col-md-4 footer-contents" >
                    <Link href="/privacy-policy" className="footer-links">Privacy Policy</Link>
                    <span className="mx-3"> |</span>
                    <Link href="/term-use" className="footer-links">Terms of Use</Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SearchPageFooter;