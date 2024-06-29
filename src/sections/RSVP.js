import React, {useState} from 'react';

function RSVP() {
    const [peopleCount, setPeopleCount] = useState(1);

    const handlePeopleChange = (event) => {
        setPeopleCount(Number(event.target.value));
    };

    // Function to create iframe elements in pairs
    const renderIframesInPairs = () => {
        const pairs = [];
        for (let i = 0; i < peopleCount; i += 2) {
            pairs.push(
                <div className="row" key={`row-${i}`}>
                    <div className="col-md-6">
                        <h2>Adult {i + 1} Menu Choice</h2>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSc7K4BuG0BLFpnSYskAIbN2wwi0ffq43aJhQ_jNRLZk2dEXYQ/viewform?embedded=true"
                            width="100%"
                            height="500px"
                            title={`RSVP Form for Person ${i + 1}`}
                        >
                            Loading…
                        </iframe>
                    </div>
                    {i + 1 < peopleCount && (
                        <div className="col-md-6">
                            <h2>Adult {i + 2} Menu Choice</h2>
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSc7K4BuG0BLFpnSYskAIbN2wwi0ffq43aJhQ_jNRLZk2dEXYQ/viewform?embedded=true"
                                width="100%"
                                height="500px"
                                title={`RSVP Form for Person ${i + 2}`}
                            >
                                Loading…
                            </iframe>
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
        <div className="sectionContent text-start">
            <h1>RSVP</h1>
            <p>Please let us know if you can join us in celebrating our special day!</p>
            <div className="row align-items-center mb-3">
                <div className="col-auto">
                    <label htmlFor="people-select" style={labelStyle}>Number of Adults:</label>
                </div>
                <div className="col-auto">
                    <select className="form-select" id="people-select" value={peopleCount}
                            onChange={handlePeopleChange} style={selectStyle}>
                        {[...Array(5)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
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
