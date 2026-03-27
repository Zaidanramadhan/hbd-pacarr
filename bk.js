
const message = `celmattttt ulanggg tahunnn pacalll kecayangannn mamassss.\npanjangggg umurrrr celaluuu yaaa cantikkkkkkkkkkkkkkkkk, cudaaaaaaa tuaaaa ajaaaa.\n\nsamaaaa mamasssss teyussssss yaaaa cantikkkkkkkkkkkkkkkkk.”\n\nhalusss nuruttt samaaa oranggg tuaaaa, camaaa mamassss jugaaaa jangannn ngeyellll yaaaa dedeeee \n\ncemogaaaaaa jugaaa mamassss bisaaaa nemeninnn di next birthday oteeeyyyyyy \n\ncelmatttt ulanggg tahunnn calonnnn istriiiii mamasssss lopyuuuuu.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
