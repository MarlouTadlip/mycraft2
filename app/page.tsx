import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Privacy</a></li>
            </ul>
          </div>
          <div className="flex px-2">
            <Image src="/icon.png" alt="" height={40} width={40}/>
            <a className="btn btn-ghost text-xl">MyCraft</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Privacy</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn btn-soft btn-warning">Log In</a>
          <a className="btn btn-soft btn-info">Sign Up</a>
          <a className="btn btn-ghost">🛒</a>
        </div>
    </div>
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src="hero.jpg"
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Handcrafted with Love</h1>
        <p className="py-6">
        Explore unique, sustainable handmade creations crafted by artisans around the world.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright &copy; 2025 - All right reserved by MyCraft</p>
        </aside>
    </footer>
    </>
  );
}
