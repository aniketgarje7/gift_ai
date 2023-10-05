import Link from "next/link"

const HeaderHomePage = ()=>{
    return (
        <>
            <div className="container header-home-page">
                <Link className="navbar-brand" href="/">
                    <img src="./assets/GiftAIlogo.png" alt="GiftAIlogo" width="152" height="37"
                        className="img-fluid" />
                </Link>
                <div className="navbar-right-logo">
                    <img src="./assets/question.png" className="img-fluid" alt="question" />
                </div>
            </div>
        </>
    )
}

export default HeaderHomePage;