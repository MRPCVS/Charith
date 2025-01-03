function typewriterEffect(text, typingSpeed = 90){
    const typewriterText = document.getElementById('typewriter');
  typewriterText.innerHTML = "";
  let i = 0;
  let timer = setInterval(() => {
      if (i < text.length){
        typewriterText.innerHTML += text.charAt(i);
      i++;          
    } else {
        clearInterval(timer)
    }
  }, typingSpeed); 
}