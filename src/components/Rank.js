import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import NoImages from "./NoImages";
import Image from "./Image";
import axios from 'axios'

const Rank = ({ searchTerm }) => {
    const [images, setimages] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        //do axios fetch
        axios.get('http://localhost:5000/rank/' + searchTerm).then(res => {
            return JSON.parse(res.data)
        })
            .then(val => {
                let t = val.urls.map((url, i) => {
                    return <Image url={url} key={i} alt={"image" + i} />
                })
                setimages(t)
            })
            .catch(err => console.error(err))
            .finally(_ => {
                setLoading(false)
            })
        // eslint-disable-next-line
    }, [searchTerm]);
    return (
        <div>
            <h2>{searchTerm} Images</h2>
            <div className="photo-container">
                {
                    loading && <Loader />
                }
                {
                    !loading &&
                    <div>
                        <ul>{images}</ul>
                        <NoImages />
                    </div>
                }
            </div>
        </div>
    );
};

export default Rank;