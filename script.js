function toggleMode() {
  let html = document.documentElement

  let themeMeta = document.querySelector("meta[name='theme-color']")

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  html.classList.toggle("light")
  // para mudar a foto ao apertar o botao - 
 
  // pegar a tag img
  
  // substituir a imagem
  // se tiver light mode, adicionar a imagem light
  //se tiver sem light mode, manter a imagem normal
  if (html.classList.contains("light")) {
    themeMeta.setAttribute("content", "#ffffff")
  } else {
    themeMeta.setAttribute("content", "#808080")
  }
}
