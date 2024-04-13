import { Link } from "react-router-dom"


function SinglePage() {
    return (
        <div className=''>
            <p>Hello From the Single Page</p>
            <p>This page will display individual projects with details etc.</p>
            <Link to='../contact'>
                <button>
                    Contact
                </button>
            </Link>

        </div>
    )
}

export default SinglePage