import React, {useState} from 'react';

function RSVP() {
    const [peopleCount, setPeopleCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);

    const handlePeopleChange = (event) => {
        setPeopleCount(Number(event.target.value));
    };

    const handleChildrenChange = (event) => {
        setChildrenCount(Number(event.target.value));
    };

    // Function to create iframe elements in pairs
    const renderIframesInPairs = () => {
        const pairs = [];
        for (let i = 0; i < peopleCount; i += 2) {
            pairs.push(
                <div className="row" key={`row-${i}`}>
                    <div className="col-md-6">
                        <h2>Adult {i + 1} menu choice </h2>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSecmOoXS_vk7qFSIoJNJOkZ14J5vmmW_M0y-tj0cK3zSMonrA/viewform?embedded=true"
                            width="100%"
                            height="500px"
                            title={`RSVP Form for Person ${i + 1}`}
                        >
                            Loading…
                        </iframe>
                    </div>
                    {i + 1 < peopleCount && (
                        <div className="col-md-6">
                            <h2>Adult {i + 2} menu choice </h2>
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSecmOoXS_vk7qFSIoJNJOkZ14J5vmmW_M0y-tj0cK3zSMonrA/viewform?embedded=true"
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

    const renderChildIframesInPairs = () => {
        const pairs = [];
        for (let i = 0; i < childrenCount; i += 2) {
            pairs.push(
                <div className="row" key={`row-${i}`}>
                    <div className="col-md-6">
                        <h2>Child {i + 1} menu choice </h2>
                        <div key={`child-${i}`}>Child {i + 1}</div>
                    </div>
                    {i + 1 < childrenCount && (
                        <div className="col-md-6">
                            <h2>Child {i + 2} menu choice  </h2>
                            <div key={`child-${i}`}>Child {i + 1}</div>
                        </div>
                    )}
                </div>
            );
        }
        return pairs;
    };

    const childrenStyle = {
        paddingTop: '25px',
        textAlign: 'start'
    }

    const selectStyle = {
        paddingRight: '5px',
        paddingBottom: '10px'
    }

    return (
        <div className="sectionContent text-start">
            <h1>RSVP</h1>
            <p>Please let us know if you can make it!</p>
            <div className={"row"} style={{width: '50%'}}>
                <div className={"col-10"} style={{textAlign: 'start'}}>
                    <label style={selectStyle} htmlFor="people-select">Number of Adults: </label>
                </div>
                <div className={"col-2"} style={{textAlign: 'end'}}>
                    <select className="form-select"  id="people-select" value={peopleCount}
                            onChange={handlePeopleChange}>
                        {[...Array(5)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={"row"} style={{width: '50%'}}>
                <div className={"col-10"} style={{textAlign: 'start'}}>
                    <label style={selectStyle} htmlFor="children-select">Number of Children: </label>
                </div>
                <div className={"col-2"} style={{textAlign: 'end'}}>
                    <select className="form-select" id="children-select" value={childrenCount} onChange={handleChildrenChange}>
                        {[...Array(5)].map((_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                {renderIframesInPairs()}
            </div>

            <div style={childrenStyle}>
                {renderChildIframesInPairs()}
            </div>
        </div>
    );
}

export default RSVP;
