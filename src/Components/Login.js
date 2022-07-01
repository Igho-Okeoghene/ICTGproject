import Welcome from './Welcome';
import altar from './images/altar.png';
import Footer from './Footer';
const Login = () => {
    return ( 
       <div className="container">
        <section className='container--img'>
            <img 
            src={altar}
            alt='winners congregation with a pastor talking from the pulpit'
            className='section--image'/> 
        </section>
        <section>
            <Welcome />
            <Footer />
        </section>
       </div>
     );
}
 
export default Login;