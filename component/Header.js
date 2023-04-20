import Link from 'next/link'
const Header = ()=>{
    return (
        <div className="header">
        <div className="bg-white">
            <div className="container">
                <nav className="navbar bg-white">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            <img src="./assets/GiftAIlogo.png" alt="GiftAIlogo" width="152" height="37"
                                className="img-fluid" />
                        </Link>
                        <div className="navbar-right-logo">
                            <img src="./assets/question.png" className="img-fluid" alt="question" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </div>
    )
}

export default Header;