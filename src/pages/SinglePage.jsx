import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { REST_PATH } from "../globals/globals";

function SinglePage() {
    const { slug } = useParams()

    const restPath = `${REST_PATH}ahdesigns-work?acf_format=standard&slug=${ slug }&_embed`
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
            { isLoaded ?
                <div>
                    <h2>{restData[0].title.rendered}</h2>
                    
                    {restData[0].acf.work_tools && restData[0].acf.work_tools.length > 0 &&
                        <div>
                            <h3>Tools Used</h3>
                            {restData[0].acf.work_tools.map((tool, i) => 
                                <div key={i}>
                                    <div className={tool.post_title}>
                                        {tool.ID}
                                        {tool.post_title}
        
                                    </div>
                                </div>
                            )}
                        </div>
                    }

                    
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