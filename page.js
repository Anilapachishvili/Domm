const content= document.getElementById("content");
content.style.backgroundColor='gray';
content.style.borderRadius ="30px"
console.log(content);


const div = document.createElement("div");
div.classList.add("container");


const text = document.createElement("h1");
text.innerHTML = "Blog Title";
content.style.textAlign="center";
content.appendChild(text);

const img = document.createElement("img");
img.src = "https://jquery-plugins.net/image/plugin/dom-to-image-generate-image-from-dom-with-html5-canvas.png";
img.style.borderRadius = "30px";
document.body.appendChild(img);
content.appendChild(img);


const maintext = document.createElement("p");
maintext.innerHTML ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed justo eu sapien faucibus congue nec vel nisi. Mauris in porttitor lectus. Donec porttitor at arcu vel maximus. Praesent parta est non facilisis commodo. Aenean ac";
maintext.style.marginLeft = "550px";
maintext.style.fontSize = "20px";



content.appendChild(maintext).style.width="400px";
content.appendChild(maintext).style.height="100px";
content.appendChild(maintext);


const button = document.createElement ("btn");
button.textContent="Read more";
button.style.backgroundColor = "orange";
button.style.fontSize = "25px";
content.appendChild(button).style.borderRadius = "10px";
content.appendChild(button);






