let inputComentario = document.getElementById('inputComment')
let buttonLike = document.getElementById('like');
let imageLike = document.getElementById('imageLike');
let like = false;

function inputTest() {
  if(inputComentario.value.length >= 100) {
    inputComentario.style.color = 'red'
    inputComentario.style.border = '1px solid red'
  }
  else{
    inputComentario.style.color = '#14161a'
    inputComentario.style.border = '1px solid #16a9ff'
  }
}

function sendComment() {
  if(inputComentario.value.length < 100 && inputComentario.value.length >= 1) {
    alert('Comentário enviado com sucesso!')
  }
  else {
    alert('Comentário não enviado!')
  }
}

function sendLike() {
  if(like == false) {
    like = true
    buttonLike.style.color = '#0566ff'
    imageLike.src = 'src/gostar2.png'
  }
  else {
    like = false
    buttonLike.style.color = '#14161a'
    imageLike.src = 'src/gostar.png'
  }
}