import React, {useState} from 'react';

function RSVP() {
    const [peopleCount, setPeopleCount] = useState(0);

    const handlePeopleChange = (event) => {
        setPeopleCount(Number(event.target.value));
    };


    // Function to create iframe elements in pairs for adults
    const renderIframesInPairs = () => {
        const pairs = [];
        for (let i = 0; i < peopleCount; i += 2) {
            pairs.push(
                <div className="row" key={`adult-row-${i}`}>
                    <div className="col-md-6" style={{paddingTop: '20px'}}>
                        <h2><strong>Adult {i + 1}</strong></h2>
                        <iframe width="100%"
                                height="500px"
                                style={{borderRadius: '7px'}}
                                src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAXdI945URVhaWDRUN1g2NVZBVU5XTDBDSjE3QTdIQy4u&embed=true"
                        ></iframe>
                    </div>
                    {i + 1 < peopleCount && (
                        <div className="col-md-6" style={{paddingTop: '20px'}}>
                            <h2><strong>Adult {i + 2}</strong></h2>
                            <iframe width="100%"
                                    height="500px"
                                    style={{borderRadius: '7px'}}
                                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAXdI945URVhaWDRUN1g2NVZBVU5XTDBDSjE3QTdIQy4u&embed=true"
                            ></iframe>
                        </div>
                    )}
                </div>
            );
        }
        return pairs;
    };

    const labelStyle = {
        marginRight: '10px'
    };

    const selectStyle = {
        width: 'auto',
        display: 'inline-block'
    };

    return (
        <div className="text-start">
            <div className="row mb-4">
                <div className="col-md-12">
                    <h1>RSVP</h1>
                </div>
            </div>
            <p>Let us know if you can make it! </p>
            <div className="row align-items-center mb-3">
                <div className="col-9">
                    <label htmlFor="people-select" style={labelStyle}>Please select the number of people you are
                        responding for:</label>
                </div>
                <div className="col-3">
                    <select className="form-select" id="people-select" value={peopleCount}
                            onChange={handlePeopleChange} style={selectStyle}>
                        {[...Array(8)].map((_, i) => (
                            <option key={i} value={i}>{i}</option> // Adult count starts from 0
                        ))}
                    </select>
                </div>
            </div>

            <div>
                {renderIframesInPairs()}
            </div>

        </div>
    );
}

export default RSVP;
