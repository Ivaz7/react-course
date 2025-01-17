import './App.css'
import dataArticle from './data.js'

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

function Header() {
  return (
    <>
      <header>
        <i className="fa-solid fa-globe globle"></i>
        <h1>Journal Travel</h1>
      </header>
    </>
  );
}

function Main() {
  const dataElement = dataArticle.map((data) => {
    return (
      <ArticleSection 
        key={data.id}
        {...data}
      />
    );
  });

  return (
    <>
      <main>
        {dataElement}
      </main>
    </>
  );
}

function ArticleSection(info) {
  const {name, place, imagePlace, flag, description, opinion} = info;
  return (
    <>
      <article>
        <img className='places-img' src={imagePlace} alt="Japan" />
        <div className='article-info'>
          <div className='head-info'>
            <div className='info-top'>
              <div className='first'>
                <i className="fa-solid fa-location-dot dot"></i>
                <h5>{name}</h5>
              </div>
              <a href={place}>Visit On Google</a>
            </div>
            <div>
              <img className='flag' src={flag} alt={flag} />
            </div>
          </div>
          <div className='body-info'>
            <p>
              &emsp;{description}
            </p>
            <p>
              &emsp;{opinion}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default App
