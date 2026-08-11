import Navigation1 from './Navigation1';
import Navigation2 from './Navigation2';
function Page404() {
    return (
        <div>
            <Navigation2 />
            <Navigation2 />
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p><a href="/">Go back to the homepage</a></p>
        </div>
    );
}
export default Page404;