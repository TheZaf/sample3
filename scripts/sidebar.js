const sidebar = [{
    icon:'source/ui_interface/home.png',
    section:'Home'
},{
    icon:'source/ui_interface/search.png',
    section:'Explore'
},{
    icon:'source/ui_interface/notification.png',
    section:'Notification'
},{
    icon:'source/ui_interface/message.png',
    section:'Messages'
},{
    icon:'source/ui_interface/grok.png',
    section:'Grok'
},{
    icon:'source/ui_interface/people.png',
    section:'Communities'
},{
    icon:'source/ui_interface/profile.png',
    section:'Profile'
},{
    icon:'source/ui_interface/more.png',
    section:'More'
}
];


let sidebarHTML = '';

sidebar.forEach((side)=> {
    sidebarHTML +=`
    <div class="side-container">
        <div class="side-box">
           <div class="img-box"><img src="${side.icon}"></div>
           <div class="section-box">${side.section}</div>
        </div> 
    </div>
    `
});

document.querySelector('.side-wrap').innerHTML=sidebarHTML;




