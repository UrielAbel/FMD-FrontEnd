import Styles from './SearchPostCard.module.css'
import Link from 'next/link';

const SearchPostCard = ({ post }) => {
    return (
        <Link href={`/articulos/${post.uri}`} className={Styles.contCard}>
            <div className={Styles.contImage}>
                <img src={post.imageUrl} alt='yes' className={Styles.image} />
            </div>
            <div className={Styles.contInfo}>
                <p className={Styles.category}>{post.category[0]}</p>
                <div className={Styles.sep} style={{ width: '30px' }}></div>
                <div className={Styles.contTextInside}>
                    <h3 className={Styles.title}>{post.title}</h3>
                    <p className={Styles.description}>{post.description}</p>
                </div>
                <div className={Styles.sep} style={{ width: '80px' }}></div>
                <p className={Styles.author}>Por {post.author.name}</p>
            </div>
        </Link>
    );
}

export default SearchPostCard;