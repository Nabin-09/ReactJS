function customRender(reactElement , container){
    /* Not Good Code as what if there were different attribues
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement) */
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children: 'Click me to visit Google!'
}//This is how every element is defined in react


const mainContainer = document.getElementById('root')

customRender(reactElement , mainContainer);