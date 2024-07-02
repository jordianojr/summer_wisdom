import React, { useState } from 'react';
import DataFetchingComponent from './DataFetch'; // Import DataFetchingComponent
import Header from './Header'; // Import Header
import Footer from './Footer';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function LyricsGen() {
    const router = useRouter();

    const [formData, setFormData] = useState({
    artist: '',
    title: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setSubmitted(false);
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setArtist(formData.artist);
        setTitle(formData.title);
        setSubmitted(true);
    };

    const handleNewLyrics = () => {
        setSubmitted(false); 
        setTimeout(() => {
        setSubmitted(true); 
        }, 10); 

        // Optionally, scroll to top of the page when generating new lyrics
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Header />  

        <h1 style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", padding: "50px" }}> 
            Random Lyrics Generator
        </h1>
            <div className="container" style={{ padding: '50px' }}>
            <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <label htmlFor="artist" className="form-label">Artist Name</label>
                        <input type="text" className="form-control" id="artist" name="artist" value={formData.artist} onChange={handleChange} />
                    </div>
                    <div className="card-body">
                        <label htmlFor="title" className="form-label">Song Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
                    </div>
                    <div style={{textAlign: "right", paddingRight: "20px", paddingBottom: "10px"}}>
                        <button style={{ fontSize: "14px" }} type="submit" className="btn btn-primary">Search</button>
                    </div>
                    </form>
                </div>
            </div>
            <div className="col-md-6">
                {/* Second Column Content */}
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title"><strong>Lyrics of the Day:</strong></h5>
                    {submitted && <DataFetchingComponent artist={artist} title={title} />}
                    <button className="btn btn-primary mt-3" style={{ fontSize: "12px" }} onClick={handleNewLyrics}>Generate New Lyrics</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default LyricsGen;
