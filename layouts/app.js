import  "./../static/css/style.css"
import  "./../static/scss/header.scss"
import  "./../static/scss/product.scss"
import Head from "next/head";
import Link from 'next/link';
function App(props) {
    return (
        <div>
            <section className="header">
                <ul >
                    <li>
                        <Link href="/" prefetch>
                            <a>Trang chủ</a>
                        </Link>
                    </li>
                    <li>
                        <Link as='/bai-viet' prefetch href="/article">
                            <a>Tin tức</a>
                        </Link>
                    </li>
                    <li>
                        <Link as="/san-pham" prefetch href="/product">
                            <a >Sản phẩm</a>
                        </Link>
                    </li>
                    <li>
                        <Link as="/lien-he" prefetch href="/contact">
                            <a >Liên hệ</a>
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="content">
                { props.children}
            </section>
        </div>
    );
}
export default App;