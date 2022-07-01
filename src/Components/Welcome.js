import Logo from './images/logo.png';
const Welcome = () => {
    return ( 
        <main>
            <header>
                <img
                src={Logo}
                alt= 'logo of winnners church'
                className="main-logo"/>
            </header>
            <form>
                <h1 className='form--title'>Welcome</h1>
                <label htmlFor='id'>UNIT ID</label>
                <input
                type='text'
                placeholder='Please enter your ID card number'
                className='form--input'
                />
            </form>
        </main>
     );
}
 
export default Welcome;