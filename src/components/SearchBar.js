import React, { useState } from "react";


const SearchBar = ({onSubmit}) => {
    const [term,setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    return (
        <div className="search-bar ui segment" style={{ marginTop: '10px' }}>
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>search for video</label>
                    <input type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />

                </div>
            </form>
        </div>
    );

}

export default SearchBar;



