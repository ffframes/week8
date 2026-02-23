import { Link } from "react-router";

export default function Home() {
  return (
    <div className="home-container">
    
      <header className="header">
        <h1>Guestbook</h1>
        <p>Write a message in the guestbook</p>

        <Link to="/posts" className="button">
          View All Posts. 
        </Link>
      </header>
    </div>
  );
}
