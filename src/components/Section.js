function Section(props) {

    const sectionContentStyle = {
        // paddingTop: "25px"
    };

    const sectionStyle = {
        boxSizing: 'border-box',
        // backgroundColor: 'rgba(255, 20, 25, 0.1)',
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        // marginTop: '10px',
        minHeight: '80vh',
        borderBottom: '2px solid rgba(0, 0, 0, 0.1)' // Border only at the bottom
    };


    return (
        <div>
            <section style={sectionStyle} id={props.id} className="container text-center py-5 position-relative">
                <div style={sectionContentStyle}>
                    {props.content}
                </div>
            </section>
        </div>
    )
}

export default Section;