function showYouTubePlaylist() {
    var youtubeFrame = document.getElementById("youtubePlaylistFrame");
    youtubeFrame.src = "https://www.youtube.com/embed/videoseries?list=PL8na-Gyeh2M2xs8YUHLf1P3qijCkJhpsz";
    youtubeFrame.style.display = "block";
    document.getElementById("latestVideoFrame").style.display = "none";
    document.getElementById("radioStream").style.display = "none";
}
function showLatestVideo() {
    var latestVideoFrame = document.getElementById("latestVideoFrame");
    latestVideoFrame.src = "https://www.youtube.com/embed/d9ruzAjFQ2s";
    latestVideoFrame.style.display = "block";
    document.getElementById("youtubePlaylistFrame").style.display = "none";
    document.getElementById("radioStream").style.display = "none";
}

function playRadio() {
    var audio = document.getElementById("radioStream");
    audio.style.display = "block";
    audio.play();
    document.getElementById("youtubePlaylistFrame").style.display = "none";
    document.getElementById("latestVideoFrame").style.display = "none";
}

function openWebsite() {
    window.open("https://thehouseofyhwh.org/", "_blank");
}
