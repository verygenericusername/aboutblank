var ab_main = {
run: function(url){
var code = `
<body>

</body>

<script>

var button = document.createElement("button");
button.textContent = "Open Game";

document.body.appendChild(button);
function openGame()  {

var win = window.open()

var url = "https://" + url;

var iframe = win.document.createElement('iframe')

iframe.style.width = "100%";

iframe.style.height = "100%";

iframe.style.border = "none";

iframe.src = url

win.document.body.appendChild(iframe)

}

button.addEventListener("click",openGame);
</script>
`;
return code;
}
}