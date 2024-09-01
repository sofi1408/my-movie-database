import Image from "next/image";
// import Link from "next/link";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
    posterPath: string;
    title: string;
    description: string;
    id: number;
}

const MovieCard = ({posterPath, title, description, id} : MovieCardProps) => {
  return (
    // <Link href={`/movie/${id}`}>
    <div className={styles.card}>
     <Image className={styles.image} src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} width={300} height={220} />
     <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description.substring(0,100)}...</p>
     </div> 
    </div>
    // </Link>
  )
}

export default MovieCard
