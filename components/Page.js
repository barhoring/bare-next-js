import Header from './Header';

export default function Page({ children }) {
    return (
      <div>
          <Header />
        <h2>I am the page compoennt</h2>
        {children}
      </div>
    );
  }
  