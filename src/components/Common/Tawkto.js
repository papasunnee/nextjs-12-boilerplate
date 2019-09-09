import React, { Component } from "react";

export default class Tawkto extends Component {
  state = {};

  componentDidMount() {
    const tawk = document.createElement("script");
    const scriptText = document.createTextNode(`
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5d735a4377aa790be332de0a/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    `);
    tawk.appendChild(scriptText);
    document.getElementById("tawkto").appendChild(tawk);
  }
  render() {
    return <div id="tawkto" />;
  }
}
