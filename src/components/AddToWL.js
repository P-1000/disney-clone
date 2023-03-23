import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
});

const db = firebase.firestore();

export function addToWatchlist(movie) {
  // Check if the user is logged in
  const user = firebase.auth().currentUser;
  if (!user) {
    alert("Please log in to add movies to your watchlist.");
    return;
  }

  // Create a new Firestore document in the watchlist collection for the current user
  db.collection("watchlist")
    .doc(user.uid)
    .collection("movies")
    .add(movie)
    .then(() => {
      alert("Movie added to watchlist!");
    })
    .catch((error) => {
      alert(error.message);
    });
}



// import { addToWatchlist } from "./watchlist";

// function MovieDetail(props) {
//   const movie = props.movie;

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <img src={movie.poster} alt={movie.title} />
//       <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
//     </div>
//   );
// }
