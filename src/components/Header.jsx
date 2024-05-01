import "./Header.css"

const Header = () => {
    return <div className="Header">
        <h3>오늘은 📆</h3> {/* windows키 + . 을 누르면 이모지가 나옴 */}
        <h1>{new Date().toDateString()}</h1>
    </div>
}

export default Header;