import Link from "next/link";

const HomePageFooter = () => {
  return (
    <div className="container footer-container">
      <div className="row justify-between">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 footer-contents" >
        <Link href="/privacy-policy" className="footer-links">Privacy Policy</Link>
          <span className="mx-3"> |</span>
          <Link href="/term-use" className="footer-links">Terms of Use</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageFooter;
