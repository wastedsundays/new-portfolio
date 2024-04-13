import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';


function SinglePage() {
    const { slug } = useParams()

    const restPath = `https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects?acf_format=standard&slug=${ slug }&_embed`
    const [restData, setData] = useState([])    
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])



    return (
        <div className=''>
            <p>Hello From the Single Page</p>
            <p>This page will display individual projects with details etc.</p>
            { isLoaded ?
                <div>
                    <h2>{restData[0].title.rendered}</h2>
                    
                    <Link to='../contact'>
                        <button>
                            Contact
                        </button>
                    </Link>
                    <Link to='../work'>
                        <button>
                            Back
                        </button>
                    </Link>

                </div>
                : 
                <div>
                    Loading...
                </div>
            }

        </div>
    )
}

export default SinglePage