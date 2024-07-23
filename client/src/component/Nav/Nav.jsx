import '../Nav/style.css'

const Nav = () => {
    return (
        <nav>
            <div className='logo'>
                <img src="./assets/logo.png" alt="logo" />
                <p>FormBot</p>
            </div>
            <div>
                <button className='signin'>Sign in</button>
                <button className='create'>Create a FormBot</button>
            </div>
        </nav>
    )
}

export default Nav