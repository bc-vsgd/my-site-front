import "./App.css";

const countriesUrl = "https://strong-churros-e75113.netlify.app/";
const tripAdUrl = "https://boisterous-crisp-296a6b.netlify.app/";
const deliverooUrl = "https://main--extraordinary-cocada-b8d90e.netlify.app/";
const vintedUrl = "https://verdant-cuchufli-1ef06a.netlify.app/";

function App() {
  return (
    <div>
      <p>Home page</p>
      <div>
        <p>
          <a href="#">Qui suis-je ?</a>
        </p>
      </div>
      <div>
        <p>Projets personnels</p>
        <div>
          <p>
            <a href={countriesUrl} target="_blank">
              Countries app
            </a>
          </p>
          <p>Top babies names</p>
        </div>
      </div>
      <div>
        <p>Projets Le Reacteur</p>
        <p>
          <a href={tripAdUrl} target="_blank">
            Tripadvisor
          </a>
        </p>
        <p>
          <a href={deliverooUrl} target="_blank">
            Deliveroo
          </a>
        </p>
        <p>
          <a href={vintedUrl} target="_blank">
            Vinted
          </a>
        </p>
        <p>Netflix ? (React 2)</p>
        <p>Emoji ? (React 4)</p>
        <p>Airbnb: React Native (vidéo ?)</p>
      </div>
    </div>
  );
}

export default App;
