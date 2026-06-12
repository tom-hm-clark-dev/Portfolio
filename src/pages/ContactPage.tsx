import Section from "../components/Section";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";

export function ContactPage() {
    return (
        <>
            <Navbar />
            <Section
            id="hero"
            bg="dark">
                <Row>
                    <Col>
                        <h1>Contact Page</h1>
                    </Col>
                </Row>
            </Section>
        </>
    )
}

export default ContactPage