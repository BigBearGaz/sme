const streamer1= document.getElementById(`tavaa`)
const streamer2= document.getElementById(`nyux`)
const streamer3= document.getElementById(`gazo`)
const lecture= document.getElementById(`lecteur`)
const chat= document.getElementById(`chat`)

streamer1.addEventListener('click', () => {
   lecture.src="https://player.twitch.tv/?autoplay=false&channel=Sididi&parent=127.0.0.1"
   chat.src="https://www.twitch.tv/embed/sididi/chat?parent=127.0.0.1"
  });
streamer2.addEventListener('click', () => {
    lecture.src="https://player.twitch.tv/?autoplay=false&channel=TAVAA&parent=127.0.0.1"
    chat.src="https://www.twitch.tv/embed/TAVAA/chat?parent=127.0.0.1"

  });
streamer3.addEventListener('click', () => {
    lecture.src="https://player.twitch.tv/?autoplay=false&channel=Locklear&parent=127.0.0.1"
    chat.src="https://www.twitch.tv/embed/Locklear/chat?parent=127.0.0.1"
  });
