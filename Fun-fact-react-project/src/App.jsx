import image from './assets/react.svg'

function App() {
  return (
    <>
      <HeaderElem />
      <MainElem />
      <FooterElem />
    </>
  );
}

function HeaderElem() {
  return (
    <header>
      <nav className='nav-links'>
        <div className='nav-links-logo'>
          <img src={image} height="50px"/>
          <h1>React</h1>
        </div>
        <a href="https://react.dev/" target='_blank' className='nav-links-items'>About</a>
      </nav>
    </header>
  );
}

function MainElem() {
  return (
    <main>
      <section>
        <h1>React Fun Fact!</h1>
      </section>
      <section>
        <ul>
          <li>React was created by Facebook and was first released in 2013.</li>
          <li>It uses a virtual DOM to make UI updates faster and more efficient.</li>
          <li>React allows you to build components that can be reused throughout your application.</li>
          <li>React&apos;s JSX syntax lets you write HTML-like code inside JavaScript.</li>
          <li>React has a huge and active community, which means lots of tutorials and resources!</li>
        </ul>
      </section>
    </main>
  );
}

function FooterElem() {
  return (
    <footer>
        <div className='text'>
      	  &#169; 2024 Ivaz Reza. All right reserved.
        </div>
    </footer>
  );
}

export default App
