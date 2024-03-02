
const h1=React.createElement('h1',{},"Learn Web Devlopment")

const p1=React.createElement('p',{},"In this project, You will  create a straightforward web page using ReactJS with the assistance of Content Delivery Network (CDN) links. ReactJS is a powerful JavaScript library that allows us to build interactive and dynamic user interfaces. By leveraging CDNs, we can quickly access the necessary React libraries without the need for complex development setups. Use the React.createElement to create the Element And for rendering it use React.render.")
const a=React.createElement('a',{href:"google.com"},"word to link")
const p2=React.createElement('p',{},"In this project, You will create a page using ReactJS with the assistance of Content Delivery Network (CDN) links. ReactJS is a powerful JavaScript library that allows us to build interactive and dynamic user interfaces. By leveraging CDNs, we can quickly access the necessary React libraries without the need for complex development setups. Use the React.createElement to create the Element And for rendering it use React.render.")

const p3=React.createElement('p',{},"In this project, You will  create a straightforward web page using ReactJS with the assistance of Content Delivery Network (CDN) links. ReactJS is a powerful JavaScript library that allows us to build interactive and dynamic user interfaces. By leveraging CDNs, we can quickly access the necessary React libraries without the need for complex development setups. Use the React.createElement to create the Element And for rendering it use React.render.")



const div=React.createElement('div',{className:'ud'} ,h1,p1,p2,a,p3)
const pdiv=React.createElement('div',{className:'uddesh'},div)
ReactDOM.render(pdiv, document.getElementById('root'))