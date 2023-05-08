import Link from "next/link";

const HomePageFooter = ()=>{
    return (
        
              <div className="container">
                <div className="row">

                <div className="col-md-6">© 2023 Gift.ai | All Rights Reserved</div>
                <div className="col-md-6">
                <Link href="/privacy-policy" >Privacy Policy</Link>
                <span className="mx-3"> |</span>
                <Link href="/term-use" >Terms of Use</Link>
         </div>
                </div>
                                 
        </div>
           
    
    )
}

export default HomePageFooter;