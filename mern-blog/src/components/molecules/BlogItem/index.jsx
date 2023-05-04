import React from 'react';
import { LoginBg } from '../../../assets';
import { useHistory } from 'react-router-dom';
import { Button, Gap } from '../../atoms';
import './blogItem.scss';

const BlogItem = (props) => {
    const history = useHistory();
    const { image, title, name, date, body } = props;
    return (
        <div className='blog-item'>
            <img src={image} className="img-thumb" />
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className='body'>{body}</p>
                <Gap height={20} />
                <Button title='View Detail' onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem