import Section from "../components/Section";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";

export function AboutPage() {
    return (
        <>
            <Navbar />
            <Section
            id="hero"
            bg="dark">
                <Row>
                    <Col>
                    <h1>About me</h1>
                    </Col>
                </Row>
            </Section>
        </>
    )
}

export default AboutPage