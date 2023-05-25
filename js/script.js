const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector(".img-area img"),
    musicName = wrapper.querySelector(".song-details .name"),
    musicArtist = wrapper.querySelector(".song-details .artist"),
    musicAlbum = wrapper.querySelector(".song-details .album"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    prevBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next"),
    mainAudio = wrapper.querySelector("#main-audio"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = progressArea.querySelector(".progress-bar"),
    musicList = document.querySelector(".music-list"),
    moreMusicBtn = document.querySelector("#more-music");


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    // playingSong();
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicAlbum.innerText = allMusic[indexNumb - 1].album;
    musicImg.src = `img/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

//play music function
function playMusic() {
    wrapper.classList.add("paused");
    // playPauseBtn.querySelector("div").innerText = "pause";
    document.querySelector('.play-mp3').style.display = 'none';
    document.querySelector('.pause-mp3').style.display = 'block';
    mainAudio.play();
}

//pause music function
function pauseMusic() {
    wrapper.classList.remove("paused");
    document.querySelector('.play-mp3').style.display = 'block';
    document.querySelector('.pause-mp3').style.display = 'none';
    // playPauseBtn.querySelector("div").innerText = "play_arrow";
    mainAudio.pause();
}

//prev music function
function prevMusic() {
    musicIndex--; //decrement of musicIndex by 1
    //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

//next music function
function nextMusic() {
    musicIndex++; //increment of musicIndex by 1
    //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    // playingSong();
}

// play or pause button event
playPauseBtn.addEventListener("click", () => {
    const isMusicPlay = wrapper.classList.contains("paused");
    //if isPlayMusic is true then call pauseMusic else call playMusic
    isMusicPlay ? pauseMusic() : playMusic();
    // playingSong();
});

//prev music button event
prevBtn.addEventListener("click", () => {
    prevMusic();
});

//next music button event
nextBtn.addEventListener("click", () => {
    nextMusic();
});

// update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuartion = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", () => {
        // update song total duration
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if (totalSec < 10) { //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });
    // update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) { //if sec is less than 10 then add 0 before it
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth; //getting width of progress bar
    let clickedOffsetX = e.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting song total duration

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic(); //calling playMusic function
    playingSong();
});

//change loop, shuffle, repeat icon onclick
// const repeatBtn = wrapper.querySelector("#repeat-plist");
// repeatBtn.addEventListener("click", ()=>{
//   let getText = repeatBtn.innerText; //getting this tag innerText
//   switch(getText){
//     case "repeat":
//       repeatBtn.innerText = "repeat_one";
//       repeatBtn.setAttribute("title", "Song looped");
//       break;
//     case "repeat_one":
//       repeatBtn.innerText = "shuffle";
//       repeatBtn.setAttribute("title", "Playback shuffled");
//       break;
//     case "shuffle":
//       repeatBtn.innerText = "repeat";
//       repeatBtn.setAttribute("title", "Playlist looped");
//       break;
//   }
// });

//code for what to do after song ended
mainAudio.addEventListener("ended", () => {
    // we'll do according to the icon means if user has set icon to
    // loop song then we'll repeat the current song and will do accordingly
    let getText = repeatBtn.innerText; //getting this tag innerText
    switch (getText) {
        case "repeat":
            nextMusic(); //calling nextMusic function
            break;
        case "repeat_one":
            mainAudio.currentTime = 0; //setting audio current time to 0
            loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
            playMusic(); //calling playMusic function
            break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1); //genereting random index/numb with max range of array length
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while (musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
            musicIndex = randIndex; //passing randomIndex to musicIndex
            loadMusic(musicIndex);
            playMusic();
            playingSong();
            break;
    }
});

// const ulTag = document.querySelector(".mp3-list");

// for (let i = 0; i < allMusic.length; i++) {

//     allMusic.length = 5;
//     let liTag = `<li class="bg-list" li-index="${i + 1}">
//                 <div class="row">
//                   <p class="name-list">${allMusic[i].name}</p>
//                   <p class="album-list">${allMusic[i].artist}<span> - ${allMusic[i].album}</span></p>
//                   <span id="${allMusic[i].src}" class="audio-duration duration-list">3:40 </span><span class="putar-list"> . Telah diputar <span>180.256.223</span> kali</span>
//                 </div>
//                 <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
//               </li>`;
//     ulTag.insertAdjacentHTML("beforeend", liTag);

//     let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
//     let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
//     liAudioTag.addEventListener("loadeddata", () => {
//         let duration = liAudioTag.duration;
//         let totalMin = Math.floor(duration / 60);
//         let totalSec = Math.floor(duration % 60);
//         if (totalSec < 10) {
//             totalSec = `0${totalSec}`;
//         };
//         liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`;
//         liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`);
//     });
// }

//play particular song from the list onclick of li tag
// function playingSong() {
//     const allLiTag = ulTag.querySelectorAll("li");

//     for (let j = 0; j < allLiTag.length; j++) {
//         let audioTag = allLiTag[j].querySelector(".audio-duration");

//         if (allLiTag[j].classList.contains("playing")) {
//             allLiTag[j].classList.remove("playing");
//             let adDuration = audioTag.getAttribute("t-duration");
//             audioTag.innerText = adDuration;
//         }

//         if (allLiTag[j].getAttribute("li-index") == musicIndex) {
//             allLiTag[j].classList.add("playing");
//             audioTag.innerText = "Playing";
//         }

//         allLiTag[j].setAttribute("onclick", "clicked(this)");
//     }
// }

//particular li clicked function
function clicked(element) {
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex; //updating current song index with clicked li index
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}
// $('#open-player').on('click', function() {
//     if ($('.wrapper').addClass('.wrapper.click-hover') == '.wrapper') {
//         $('.wrapper').addClass('click-hover');
//     } else {
//         $('.wrapper').removeClass('click-hover');
//     }
// });
$('#open-player').click(function() {
    if ($('.wrapper').hasClass('wrapper-click')) {
        $('.wrapper').removeClass('wrapper-click');
    } else {
        $('.wrapper').addClass('wrapper-click');
    }
    if ($('.wrap-mp3__item').hasClass('wrap-mp3__item-click')) {
        $('.wrap-mp3__item').removeClass('wrap-mp3__item-click');
    } else {
        $('.wrap-mp3__item').addClass('wrap-mp3__item-click');
    }
    if ($('.wrap-controls').hasClass('wrap-controls-click')) {
        $('.wrap-controls').removeClass('wrap-controls-click');
    } else {
        $('.wrap-controls').addClass('wrap-controls-click');
    }
    if ($('.wrap-topbar').hasClass('wrap-topbar-click')) {
        $('.wrap-topbar').removeClass('wrap-topbar-click');
    } else {
        $('.wrap-topbar').addClass('wrap-topbar-click');
    }
    if ($('.img-area').hasClass('img-area-click')) {
        $('.img-area').removeClass('img-area-click');
    } else {
        $('.img-area').addClass('img-area-click');
    }
    if ($('.song-details').hasClass('song-details-click')) {
        $('.song-details').removeClass('song-details-click');
    } else {
        $('.song-details').addClass('song-details-click');
    }
    if ($('.wrap-mp3').hasClass('wrap-mp3-click')) {
        $('.wrap-mp3').removeClass('wrap-mp3-click');
    } else {
        $('.wrap-mp3').addClass('wrap-mp3-click');
    }
    if ($('.name').hasClass('name-click')) {
        $('.name').removeClass('name-click');
    } else {
        $('.name').addClass('name-click');
    }
    if ($('.expand_more').hasClass('icon-more-click')) {
        $('.expand_more').removeClass('icon-more-click');
    } else {
        $('.expand_more').addClass('icon-more-click');
    }
});