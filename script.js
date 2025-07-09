var menuicon = document.querySelector('.menu');
var sidebar = document.querySelector('.sidebar');
var container = document.querySelector('.container');


menuicon.onclick=function(){
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const paramArray = queryString.split('&');
    paramArray.forEach(param => {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
    });
    return params;
}

// Load video based on query parameters
window.onload = function() {
    const params = getQueryParams();
    const videoTitle = document.getElementById('video-title');
    const videoSource = document.getElementById('video-source');
    const videoPlayer = document.getElementById('video-player');
    const videologo = document.getElementById('videochannellogo');
    const videoname = document.getElementById('videochannelname');
    
    if (videoTitle) {
        videoTitle.innerText = params.title || 'Default Title';
    } else {
        console.error('Element not found: video-title');
    }
    if (videoSource) {
        videoSource.src = params.video || 'video.mp4';
    } else {
        console.error('Element not found: video-source');
    }

    if (videologo) {
        videologo.src = params.logo || 'logo7.jpg';
    } else {
        console.error('Element not found: videochannellogo');
    }

    if (videoname) {
        videoname.innerText = params.channelname || 'Default name';
    } else {
        console.error('Element not found: videochannelname');
    }

    if (videoPlayer) {
        videoPlayer.load();
    } else {
        console.error('Element not found: video-player');
    }
};