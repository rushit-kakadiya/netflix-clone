import { Alert } from "react-bootstrap";

export default function ErrorPage(props) {
    return <div className="page_center">
        <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <h4>{props?.errorMessage}</h4>
        </Alert>
    </div>
}