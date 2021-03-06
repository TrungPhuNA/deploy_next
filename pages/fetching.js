import React from 'react';
class Fetching extends React.Component {
    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        return { userAgent };
    }
  
    render() {
        return <div>Hello World {this.props.userAgent}</div>;
    }
}
  
  export default Fetching;