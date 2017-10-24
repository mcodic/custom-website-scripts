ytPlaylist = {} ;
ytPlaylist.urlBase = "https://www.youtube.com/watch?v=" ;
ytPlaylist.items = Array.from(document.getElementsByClassName("pl-video yt-uix-tile")).map(x => x.dataset) ;
ytPlaylist.nameList = ytPlaylist.items.map(item => item.title) ;
ytPlaylist.Ids = ytPlaylist.items.map(item => item.videoId) ;
ytPlaylist.urls = ytPlaylist.items.map(item => ytPlaylist.urlBase + item.videoId) ;

// TODO: make a download plaintext file w/ list of urls 
