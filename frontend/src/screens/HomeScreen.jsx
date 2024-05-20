import Hero from "../components/Hero"

const Home = () => {
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? <h1>Replace with Application needing Login</h1> : <Hero />
}

export default Home