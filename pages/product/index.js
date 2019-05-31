import App from "./../../layouts/app";
import Link from 'next/link';
import React from 'react';
import Router from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
  
class Product extends React.Component{
    static async getInitialProps ({query}) {
        let page = 1;
        if (query.page && parseInt(query.page)) page = query.page;
        
        const res = await fetch(`https://api.pokemontcg.io/v1/cards?pages=${page}&pageSize=12`);
        const data = await res.json();
        console.log(page);
        return { data : data , page : page};
    }

    render(){
        return (
            <App>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Đây là tran danh sách sản phẩm</title>
                </Head>
            
                <div className="title">
                    <h1>Đây là trang danh sách sản phẩm</h1>
                    <div className="product_list">
                        {this.props.data.cards.map((card, i) => (
                            <div key={i} className="product_list_item">
                                <div className="product_avatar">
                                    <img src={card.imageUrl}/>
                                </div>
                                <div className="product_info">
                                    <h3>
                                        <Link href={`product/detail?id=${card.id}`} as={`san-pham/${card.id}`}>
                                            <a>{card.name}</a>
                                        </Link>
                                    </h3>
                                    <p>{card.artist}</p>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={() => Router.push(`/product?page=${this.props.page - 1}`)}
                            disabled={this.props.page <= 1}>PREV
                            </button>
                        <p>Đang ở page {this.props.page}</p>
                        <button onClick={() => Router.push(`/product?page=${this.props.page + 1}`)}>
                            NEXT
                        </button>
                    </div>
                </div>
            </App>  
        )
    }
}
export default Product;