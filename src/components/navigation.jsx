import { Link, Outlet } from 'react-router-dom'

function Navigation() {
    
    return (
        <>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/work'>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
        <div>
            <Outlet />
        </div>
        </>

    )

}

export default Navigation