import '../styles/components/App.css';
import React from "react";
import Container from "./Container";

function App(props){
    return (
        <section className={props.className}>
            <Container className='container'/>
        </section>
    );
}

export default App;
