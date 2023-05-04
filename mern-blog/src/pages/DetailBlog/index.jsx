import React from 'react';
import { LoginBg } from '../../assets';
import './detailBlog.scss';
import { useHistory } from 'react-router-dom';
import { Gap, Link } from '../../components';

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={LoginBg} />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias possimus soluta harum ab, debitis omnis consectetur fugiat? Soluta sequi quidem impedit quaerat omnis quisquam, aliquid temporibus totam aut. Voluptatibus vero quisquam, dolorum facere necessitatibus non sapiente ratione quis, aliquam molestias rerum esse eveniet dicta. Amet aperiam, quod minima possimus quis molestias eligendi voluptatum dolorum suscipit alias, laboriosam eveniet vel! Iusto deleniti tenetur cum aut animi. Asperiores, repellendus maxime? Accusamus commodi explicabo animi dolores natus exercitationem eum, magnam distinctio ab neque maxime quidem itaque ullam harum iste asperiores. Qui, perferendis quod. At iusto corporis beatae? Est consequuntur suscipit aliquid quia.</p>
            <Gap height={20} />
            <Link title='Kembali ke Home' onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog