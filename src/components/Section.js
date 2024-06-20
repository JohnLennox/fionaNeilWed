function Section(props) {

    const sectionContentStyle = {
        paddingTop: "25px"
    };

    const sectionStyle = {
        marginTop: "20px",
        minHeight: "80vh"
    }

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