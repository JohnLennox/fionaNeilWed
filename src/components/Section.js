function Section(props) {

    const sectionContentStyle = {
    };

    const sectionStyle = {
        borderBottom: '2px solid rgba(0, 0, 0, 0.1)' // Border only at the bottom
    };


    return (
        <div>
            <section style={sectionStyle} id={props.id} className="container py-5 ">
                <div style={sectionContentStyle}>
                    {props.content}
                </div>
            </section>
        </div>
    )
}

export default Section;