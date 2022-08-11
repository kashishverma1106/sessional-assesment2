const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09';

xhr.open('GET', url)
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const objects = JSON.parse(xhr.responseText)
        var output = ''
        objects.forEach(object => {
            document.querySelector('.row').appendChild(addCard(object))
        });
        console.log(output)
    }
}
xhr.send()

function addCard(object) {
    const col = document.createElement('div')
    col.setAttribute('class', 'column')
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    const h2 = document.createElement('P')
    h2.textContent = object.id
    const h3 = document.createElement('P')
    h3.textContent = object.name
    const P = document.createElement('P')
    P.textContent = object.username
    const L = document.createElement('P')
    L.textContent = object.email
    const Z = document.createElement('P')
    Z.textContent = object.address.street
    const X = document.createElement('P')
    X.textContent = object.address.suite
    const Y = document.createElement('P')
    Y.textContent = object.address.city
    const N = document.createElement('P')
    N.textContent = object.address.zipcode
    // const A = document.createElement('h5')
    // A.textContent = object.address.zipcode.geo.lat 
    // const B = document.createElement('h5')
    // B.textContent = object.address.zipcode.geo.lng
    // const C = document.createElement('h5')
    // C.textContent = object.phone
    card.appendChild(h2)
    card.appendChild(h3)
    card.appendChild(P)
    card.appendChild(L)
    card.appendChild(Z)
    card.appendChild(X)
    card.appendChild(Y)
    card.appendChild(N)
    // card.appendChild(A)
    // card.appendChild(B)
    // card.appendChild(C)
    col.appendChild(card)

    return col

}