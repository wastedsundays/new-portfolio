import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { REST_PATH } from "../globals/globals";

function SinglePage() {
    const { slug } = useParams()

    const restPath = `${REST_PATH}ahdesigns-work?acf_format=standard&slug=${ slug }&_embed`
    const [restData, setData] = useState([])    
    const [isLoaded, setLoadStatus] = useState(false)
    const [toolsData, setToolsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }

        fetchData()
    }, [restPath])

    useEffect(() => {
        const fetchToolsData = async () => {
            const response = await fetch('https://wastedsundays.com/adamhdesign/wp-json/wp/v2/ahdesigns-tools?acf_format=standard&per_page=100')
            if (response.ok) {
                const data = await response.json()
                setToolsData(data)
            }
        }

        fetchToolsData()
    }, [])

    const getToolImage = (toolTitle) => {
        const tool = toolsData.find(tool => tool.title.rendered === toolTitle)
        return tool ? tool.acf.tool_image : null
    }

    return (
        <div className=''>
            {isLoaded ? (
                <div>
                    
                    <h2>{restData[0].title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{__html:restData[0].content.rendered }}></div>

                    {restData[0].acf.work_tools && restData[0].acf.work_tools.length > 0 && (
                        <div>
                            <h3>Tools Used</h3>
                            {restData[0].acf.work_tools.map((tool, i) => (
                                <div key={i}>
                                    <div className={tool.post_title}>
                                        {/* {tool.ID}
                                        {tool.post_title} */}
                                        
                                        <img src={getToolImage(tool.post_title)} alt={`${tool.post_title} icon card`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

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
            ) : (
                <div>
                    Loading...
                </div>
            )}

        </div>
    )
}

export default SinglePage
