import '../Nav/style.css'

const Nav = () => {
    return (
        <nav>
            <h1>FormBot</h1>
            <div>
                <button className='signin'>Sign In</button>
                <button className='create'>Create a FormBot</button>
            </div>
        </nav>
    )
}

export default Nav