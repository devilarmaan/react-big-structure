import React from 'react'
import { useParams } from 'react-router-dom';
import { post } from '../../API';
import Loading from '../widgets/Loading';

export default function Post() {
    const params = useParams();
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        post(params.postId, setData);        

        // cleanup function..
        return () => {
            setData(null);        
        };
    }, []);

    console.log(data);

    const renderPost = (data) => {
        if (data === null){
            return (
                <Loading color="blue" size={250} />
            );
        }

        if (data){
            return (
                <>
                    <h1>{data.title} ({data.id})</h1>
                    <p>{data.body}</p>
                </>
            );
        }
    };

  return renderPost(data);
}
