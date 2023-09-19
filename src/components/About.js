export default function About(props) {

    document.title = props.title;
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

  return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>About TextXpress</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                The <strong>TextXpress</strong> is a versatile web application that allows users to perform various operations on text. Whether you need to format text, analyze its properties, or even have it read aloud, this tool has you covered. Developed using <code>React.js</code>, this project provides a user-friendly interface for text processing.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Usage</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <ul style={{ listStyleType: "decimal" }}>
                <li>Enter or paste text into the input area.</li>
                <li>Choose from a variety of text manipulation options.</li>
                <li>View the modified text, word count, and reading time in real-time.</li>
                <li>Customize your experience with the built-in dark mode feature.</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Motivation</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>TextXpress</strong> was build to provide a convenient and accessible tool for users to manipulate text in a variety of ways. Whether you're  a writer, student, or anyone dealing with text regularly, this tool can help streamline your tasks while offering a pleasant <code>dark mode</code> for those late-night sessions.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
