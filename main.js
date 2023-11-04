const hamburger = document.getElementById('hamburger'); 
const navTitle = document.getElementById('navTitle');

let img = document.querySelector('#marsID');
let btn1 = document.querySelector('#marginLow1');
let btn2 = document.querySelector('#marginLow2');
let btn3 = document.querySelector('#marginLow3');
let btn4 = document.querySelector('#marginLow4');
let btn5 = document.querySelector('#marginLow5');
let btn6 = document.querySelector('#marginLow6');
let btn7 = document.querySelector('#marginLow7');
let btn8 = document.querySelector('#marginLow8');
let diffTitle = document.querySelector('#titleChange');

btn1.addEventListener('click', () => {
    img.src = 'img/mars.png';
    document.getElementById("titleChange").innerHTML = "MARS";
    document.getElementById("milesChange").innerHTML = "234.22 million km";
    document.getElementById("marsChange").innerHTML = "Mars is no place for the faint-hearted. It's dry, rocky, and bitter cold. The fourth planet from the Sun, Mars is one of Earth's two closest planetary neighbors (Venus is the other). Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light.";
    document.getElementById('dateChange').innerHTML = "Nov 3, 2023";
})

btn2.addEventListener('click', () => {
    img.src = 'img/neptune.png';
    document.getElementById("titleChange").innerHTML = "NEPTUNE";
    document.getElementById("milesChange").innerHTML = "4.4727 billion km";
    document.getElementById("marsChange").innerHTML = "From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune.";
    document.getElementById('dateChange').innerHTML = "Nov 3, 2023";
})

btn3.addEventListener('click', () => {
    img.src = 'img/jupiter.png';
    document.getElementById("titleChange").innerHTML = "JUPITER";
    document.getElementById("milesChange").innerHTML = "2.31 billion miles";
    document.getElementById("marsChange").innerHTML = "Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium.";
    document.getElementById('dateChange').innerHTML = "Nov 3, 2023";
})

btn4.addEventListener('click', () => {
    img.src = 'img/mercury.png';
    document.getElementById("titleChange").innerHTML = "MERCURY";
    document.getElementById("milesChange").innerHTML = "69.557 million km";
    document.getElementById("marsChange").innerHTML = "Mercury is the smallest planet in the solar system, and it is also the planet closest to the Sun, making it the most difficult of the planets to see with the unaided eye. Because its rising or setting is always within about two hours of the Sun's, Mercury is never observable when the sky is fully dark.";
    document.getElementById('dateChange').innerHTML = "Nov 3, 2023";
})

btn5.addEventListener('click', () => {
    img.src = 'img/venus.png';
    document.getElementById("titleChange").innerHTML = "VENUS";
    document.getElementById("milesChange").innerHTML = "107.65 million km";
    document.getElementById("marsChange").innerHTML = "Venus is a cloud-swaddled planet named for a love goddess, and often called Earth's twin. But pull up a bit closer, and Venus turns hellish. Our nearest planetary neighbor, the second planet from the Sun, has a surface hot enough to melt lead.";
    document.getElementById('dateChange').innerHTML = "Nov 3, 2023";
})

btn6.addEventListener('click', () => {
    img.src = 'img/earth.png';
    document.getElementById("titleChange").innerHTML = "EARTH";
    document.getElementById("milesChange").innerHTML = "148.42 million km";
    document.getElementById("marsChange").innerHTML = "The third planet from the sun, Earth is the only place in the known universe confirmed to host life. With a radius of 3,959 miles, Earth is the fifth largest planet in our solar system, and it's the only one known for sure to have liquid water on its surface.";
    document.getElementById('dateChange').innerHTML = "Nov 3, 2023";
})

btn7.addEventListener('click', () => {
    img.src = 'img/saturn.png';
    document.getElementById("titleChange").innerHTML = "SATURN";
    document.getElementById("milesChange").innerHTML = "1.4577 billion km";
    document.getElementById("marsChange").innerHTML = "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's.";
    document.getElementById('dateChange').innerHTML = "Nov 3, 2023";
})

btn8.addEventListener('click', () => {
    img.src = 'img/uranus.png';
    document.getElementById("titleChange").innerHTML = "URANUS";
    document.getElementById("milesChange").innerHTML = "2.9344 billion km";
    document.getElementById("marsChange").innerHTML = "Uranus is blue-green in color due to large amounts of methane, which absorbs red light but allows blues to be reflected back into space. The atmosphere is mostly hydrogen and helium, but also includes large amounts of water, ammonia and methane.";
    document.getElementById('dateChange').innerHTML = "Nov 3, 2023";
})



hamburger.addEventListener('click', () => {
    navTitle.classList.toggle('show');
})


