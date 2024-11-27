const feed = [{
    userName :"Elon Musk",
    nameTag :"elonmusk",
    date:"12h",
    caption:"",
    post:"source/media/feed1.jpg",
    profile:"source/profile/profile1.jpg",
    comments:"5.9K",
    hearts:"75K",
    retweet:"8.9K",
    views:"1.1M"
},{
    userName :"Cricket Gully",
    nameTag :"thecricketgully",
    date:"Aug23",
    caption:"Brand value of Indian Athletes!🇮🇳💸",
    post:"source/media/feed2.jpg",
    profile:"source/profile/profile2.jpeg",
    comments:"85",
    hearts:"11K",
    retweet:"501",
    views:"89K" 
},{
    userName :"Gambhir",
    nameTag :"gautamgambhir",
    date:"Aug24",
    caption:"Congratulations Shiki on a fantastic career!",
    post:"source/media/feed3.jpg",
    profile:"source/profile/profile3.jpeg",
    comments:"385",
    hearts:"79K",
    retweet:"45K",
    views:"449K" 
},{
    userName :"Curiosity",
    nameTag :"MAstronomers",
    date:"1h",
    caption:"Only the nerds will know what this is!",
    post:"source/media/feed4.jpg",
    profile:"source/profile/profile4.jpeg",
    comments:"985",
    hearts:"69K",
    retweet:"4K",
    views:"119K" 
},{
    userName :"Virat Kohli",
    nameTag :"imVkohli",
    date:"5h",
    caption:"Shikhar from your fearless debut to becoming one of India's most dependable openers, you've given us countless memories to cherish. Your passion for the game,your sportsmanship and your trademark smile will be missed but your legacy lives on. Thank you",
    post:"",
    profile:"source/profile/profile5.jpeg",
    comments:"6K",
    hearts:"140K",
    retweet:"20K",
    views:"3.1M" 
},{
    userName :"D Memes",
    nameTag :"LibretyCapper",
    date:"14h",
    caption:"Always Has Been 🌍",
    post:"source/media/feed6.jpg",
    profile:"source/profile/profile6.jpeg",
    comments:"185",
    hearts:"19K",
    retweet:"14K",
    views:"100K" 
},{
    userName :"The codewali",
    nameTag :"the_codewala",
    date:"1d",
    caption:"True &#128513;",
    post:"source/media/feed7.jpg",
    profile:"source/profile/profile7.jpeg",
    comments:"85",
    hearts:"9K",
    retweet:"4K",
    views:"130K" 
},{
    userName :"Earth",
    nameTag :"earthcurated",
    date:"50m",
    caption:"What comes to mind when you think of the USA?",
    post:"source/media/feed8.jpg",
    profile:"source/profile/profile8.jpeg",
    comments:"59",
    hearts:"2K",
    retweet:"879",
    views:"10K" 
},{
    userName :"Words",
    nameTag :"itsword_",
    date:"23h",
    caption:"",
    post:"source/media/feed9.jpg",
    profile:"source/profile/profile9.jpeg",
    comments:"159",
    hearts:"61K",
    retweet:"12K",
    views:"1.1M" 
},{
    userName :"Wise Connector",
    nameTag :"itsword_",
    date:"23h",
    caption:"ONE word in French",
    post:"source/media/feed10.jpg",
    profile:"source/profile/profile10.jpeg",
    comments:"2.9K",
    hearts:"1K",
    retweet:"308",
    views:"131K" 
},{
    userName :"India Tech & Infra",
    nameTag :"IndianTechGuide",
    date:"3h",
    caption:"🚨 Pop icon Dua Lipa will perform in Mumbai for the Zomato Feeding India concert on November 30.",
    post:"source/media/feed11.jpg",
    profile:"source/profile/profile11.jpeg",
    comments:"211",
    hearts:"5.1K",
    retweet:"563",
    views:"101K" 
}]


let feedHTML = "";

feed.forEach((post) => {
    feedHTML +=
    `
            <div class="feed">
              <div class="profile-box"><img class="ac-profile" src="${post.profile}"></div>
                <div class="feed-container">
                    <div class="user-data">
                     <div class="user">
                        <span class="user-name">${post.userName}</span>
                        &nbsp;<img src="source/ui_interface/blueTik.png">&nbsp;@${post.nameTag} · ${post.date}
                     </div>
                     <div class="more"><img src="source/ui_interface/moreInFeed.png" alt=""></div>
                    </div>
                    <div class="caption"><p class="cap">${post.caption}</p></div>
                    <div class="tweet-media">
                     <img class="tweet-media" src="${post.post}">
                    </div>
                    <div class="bottom-stat">
                        <div class="stat"><img src="source/ui_interface/comment.jpeg">&nbsp;${post.comments}</div>
                        <div class="stat"><img src="source/ui_interface/retweet.jpeg">&nbsp;${post.retweet}</div>
                        <div class="stat"><img  src="source/ui_interface/heart.jpeg">&nbsp;${post.hearts}</div>
                        <div class="stat"> <img src="source/ui_interface/stat.jpeg">&nbsp;${post.views}</div>
                        <div class="share-box">
                            <img class="share" src="source/ui_interface/save.jpeg">
                            <img class="share"src="source/ui_interface/share.jpeg">
                        </div>
                    </div>
                </div>
            </div>`
})

document.querySelector('.js-feed-wrap').innerHTML = feedHTML;