import App from "./../../layouts/app";
import Link from 'next/link';
import React from 'react';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
  
class ProductDetail extends React.Component{
    static async getInitialProps({query}) {
    
        const res = await fetch('https://api.pokemontcg.io/v1/cards/' + query.id)
        const data = await res.json();
        return data
    }

    render(){
        return (
            <App>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Đây là tran danh sách sản phẩm</title>
                </Head>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/"><a>Trang chủ</a></Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="/"><a>Sản phẩm</a></Link>
                    </li>
                    <li className="breadcrumb-item">
                        {this.props.card.name}
                    </li>
                </ul>
                <div className="title">
                    <h1>Đây là trang chi tiết sản phẩm</h1>
                    <div className="product_list">
                        
                    </div>
                </div>
            </App>  
        )
    }
}
export default ProductDetail;