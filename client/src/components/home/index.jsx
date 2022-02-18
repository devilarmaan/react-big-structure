import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { home } from '../../API';
import { Link } from 'react-router-dom';
import Loading from '../widgets/Loading';

export default function Home() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        home(setData);

        // clean-up ..
        return () => {
            setData(null);
        };
    }, []);

    if (data) {
        console.log('Data == ', data);
    }

    const renderHomePosts = (data) => {
        if (!data) {
            return (
                <Loading color="red" size={300} />
            );
        }

        if (data.length > 0) {
            return data.map((post) => {
                return (
                    <Col key={post.id}>
                    <Link to={`/post/${post.id}`}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                               {post.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
                )
            })
        }
    };

    return (
        <Row xs={1} md={2} className="g-4">
            {renderHomePosts(data)}
        </Row>
    )
}
