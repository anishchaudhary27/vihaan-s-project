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
        axios.get('http://localhost:5000/rank/' + searchTerm)
            .then(res => {
                return JSON.parse(res.data)
            })
            .then(val => {
                const urls = val.urls
                let t = []
                if (urls !== []) {
                    t = urls.map((url, i) => {
                        return <Image url={url} key={i} alt={"image" + i} />
                    })
                }
                else {
                    t = [<NoImages />]
                }
                setimages(t)
            })
            .catch(err => {
                setimages([<p>Error ranking images!!</p>])
            })
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
                    </div>
                }
            </div>
        </div>
    );
};

export default Rank;