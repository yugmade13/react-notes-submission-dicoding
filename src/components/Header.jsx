export default function Header(props) {
    return (
        <header className="header">
            <nav className="nav">
                <a href="/">
                    <img src="./assets/logo-name.png" alt="logo" />
                </a>
                <input type="text" placeholder="Search..." onChange={props.handleSearch}/>
            </nav>
        </header>
    );
}