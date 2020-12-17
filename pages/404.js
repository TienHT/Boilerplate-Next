import React from "react";
import Link from 'next/link'
import Head from "next/head";
function NotFound(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link href="/static/404.css" rel="stylesheet" />
            </Head>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <div></div>
                        <h1>404</h1>
                    </div>
                    <h2>Page not found</h2>
                    <p>
                        Trang hiện tại bạn đang tìm kiếm đã bị xóa hoặc không khả dụng
          </p>
                    <Link href="/">home page </Link>
                </div>
            </div>
        </div>
    );
}
export async function getStaticProps() {
    return {
      props: {
        title: '404 Page'
      },
    }
  }
export default NotFound;
