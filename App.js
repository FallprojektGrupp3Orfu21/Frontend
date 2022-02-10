class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLogedIn = false, 
            userName = null,
            password = null,
        }
    }
    render(){
    return (
        <>
        <header> 
            <nav class="Nav"></nav>
            
        </header>
        <main>
            {this.state.isLogedIn ? <LoginForm />: <Dashboard />}
            <h1></h1>
        </main>
        </>
    )
    }
}