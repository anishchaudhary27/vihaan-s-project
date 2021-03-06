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
        console.log(searchTerm)
        axios.get('http://localhost:5000/rank/' + searchTerm)
            .then(val => {
                const urls = val.data.urls
                const scores = val.data.scores
                let t = []
                if (urls !== []) {
                    t = urls.map((url, i) => {
                        return (
                            <div key={i}>
                                <Image url={url} alt={"image" + i} />
                                <p>{scores[i]}</p>
                            </div>
                        )
                    })
                }
                else {
                    t = [<NoImages key={0} />]
                }
                setimages(t)
            })
            .catch(err => {
                setimages([<p key={0}>Error ranking images!!</p>])
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