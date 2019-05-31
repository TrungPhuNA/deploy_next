import App from "./../layouts/app";
import Link from 'next/link';
import Router from 'next/router';

function ReadMore() {
    return (
        <div>
            Click <span onClick={() => Router.push('/about')}>here</span> to read more
        </div>
    );
}

function Home() {
    return (
        <div>
            <App>
                <div className="">
                    <h1>Đây là trang chủ giới thiệu về Nextjs</h1>
                    <div>
                        <ReadMore  />
                    </div>
                </div>  
            </App>
        </div>
    );
}
export default Home;