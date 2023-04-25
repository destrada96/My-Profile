// Fade-In animations

const navbar =  document.querySelector('#navbar')
const about = document.querySelector('#header')
const aboutl = document.querySelector('#about-left')
const aboutr = document.querySelector('#about-right')
const skill = document.querySelector('#header-skill')
const skillL = document.querySelector('#skill-l')
const item = document.querySelector('#pop-item')
const item1 = document.querySelector('#pop-item1')
const item2 = document.querySelector('#pop-item2')
const item3 = document.querySelector('#pop-item3')
const item4 = document.querySelector('#pop-item4')
const service = document.querySelector('#header-services')
const sitem1 = document.querySelector('#sitem1')
const sitem2 = document.querySelector('#sitem2')
const sitem3 = document.querySelector('#sitem3')
const projects = document.querySelector('#header-projects')
const pro = document.querySelectorAll('#pro-1')
const contact = document.querySelector('#header-contact')
const form1 = document.querySelector('#form1')
const form2 = document.querySelector('#form2')
const form3 = document.querySelector('#form3')
const form4 = document.querySelector('#form4')
const form5 = document.querySelector('#form5')
const foot1 = document.querySelector('#footer-item1')
const foot2 = document.querySelector('#footer-item2')
const foot3 = document.querySelector('#footer-item3')
const foot4 = document.querySelector('#footer-item4')
const foot5 = document.querySelector('#footer-item5')
const media1 = document.querySelector('#media-1')
const media2 = document.querySelector('#media-2')
const media3 = document.querySelector('#media-3')
const res = document.querySelector('#reserved')

if (isInViewport(about)) {
    document.getElementById("header").classList.add("slideUp");
}
if (isAtLeastViewport(aboutl)) {
    document.getElementById("about-left").classList.add("slideR");
}
if (isAtLeastViewport(aboutr)) {
    document.getElementById("about-right").classList.add("slideL");
}
if (isInViewport(skill)) {
    document.getElementById("header-skill").classList.add("slideUp");
}
if (isAtLeastViewport(skillL)) {
    document.getElementById("skill-l").classList.add("slideR");
}
if (isInViewport(item)) {
    document.getElementById("pop-item").classList.add("slideR");
}
if (isInViewport(item1)) {
    document.getElementById("pop-item1").classList.add("slideL");
}
if (isInViewport(item2)) {
    document.getElementById("pop-item2").classList.add("slideR");
}
if (isInViewport(item3)) {
    document.getElementById("pop-item3").classList.add("slideL");
}
if (isInViewport(item4)) {
    document.getElementById("pop-item4").classList.add("slideR");
}
if (isInViewport(service)) {
    document.getElementById("header-services").classList.add("slideUp");
}
if (isAtLeastViewport(sitem1)) {
    document.getElementById("sitem1").classList.add("slideR");
}
if (isAtLeastViewport(sitem2)) {
    document.getElementById("sitem2").classList.add("slideUp");
}
if (isAtLeastViewport(sitem3)) {
    document.getElementById("sitem3").classList.add("slideL");
}
if (isInViewport(projects)) {
    document.getElementById("header-projects").classList.add("slideUp");
}

pro.forEach(pro =>{
    if (isAtLeastViewport(pro)) {
        pro.classList.add("slideR");
    }
})

if (isInViewport(form1)) {
    document.getElementById("form1").classList.add("slideD");
}
if (isInViewport(form2)) {
    document.getElementById("form2").classList.add("slideR");
}
if (isInViewport(form3)) {
    document.getElementById("form3").classList.add("slideL");
}
if (isInViewport(form4)) {
    document.getElementById("form4").classList.add("slideUp");
}
if (isInViewport(form5)) {
    document.getElementById("form5").classList.add("slideD");
}
if (isInViewport(foot1)) {
    document.getElementById("footer-item1").classList.add("slideD");
}
if (isInViewport(foot2)) {
    document.getElementById("footer-item2").classList.add("slideD");
}
if (isInViewport(foot3)) {
    document.getElementById("footer-item3").classList.add("slideD");
}
if (isInViewport(foot4)) {
    document.getElementById("footer-item4").classList.add("slideD");
}
if (isInViewport(foot5)) {
    document.getElementById("footer-item5").classList.add("slideD");
}
if (isInViewport(media1)) {
    document.getElementById("media-1").classList.add("slideUp");
}
if (isInViewport(media2)) {
    document.getElementById("media-2").classList.add("slideUp");
}
if (isInViewport(media3)) {
    document.getElementById("media-3").classList.add("slideUp");
}
if (isInViewport(res)) {
    document.getElementById("reserved").classList.add("slideD");
}

window.onscroll = function() {myFunction()};

function myFunction() {
    if (isInViewport(about)) {
        document.getElementById("header").classList.add("slideUp");
    }
    if (isInViewport(aboutl)) {
        document.getElementById("about-left").classList.add("slideR");
    }
    if (isInViewport(aboutr)) {
        document.getElementById("about-right").classList.add("slideL");
    }
    if ((document.documentElement.scrollTop > 1050  && window.matchMedia("(max-height: 450px)").matches) || (document.documentElement.scrollTop > 450 && window.matchMedia("(max-height: 450px)").matches && window.matchMedia("(min-width: 1000px)").matches)) {
        document.getElementById("about-left").classList.add("slideR");
    }
    if ((document.documentElement.scrollTop > 650 && window.matchMedia("(max-height: 450px)").matches)|| (document.documentElement.scrollTop > 450 && window.matchMedia("(max-height: 450px)").matches && window.matchMedia("(min-width: 1000px)").matches)) {
        document.getElementById("about-right").classList.add("slideL");
    }
    if (isInViewport(skill)) {
        document.getElementById("header-skill").classList.add("slideUp");
    }
    if (isInViewport(skillL)) {
        document.getElementById("skill-l").classList.add("slideR");
    }    
    if ((document.documentElement.scrollTop > 1575 && window.matchMedia("(max-height: 450px)").matches)||(document.documentElement.scrollTop > 1150 && window.matchMedia("(max-height: 450px)").matches && window.matchMedia("(min-width: 1000px)").matches)){
        document.getElementById("skill-l").classList.add("slideR");
    }
    if (isInViewport(item)) {
        document.getElementById("pop-item").classList.add("slideR");
    }
    if (isInViewport(item1)) {
        document.getElementById("pop-item1").classList.add("slideL");
    }
    if (isInViewport(item2)) {
        document.getElementById("pop-item2").classList.add("slideR");
    }
    if (isInViewport(item3)) {
        document.getElementById("pop-item3").classList.add("slideL");
    }
    if (isInViewport(item4)) {
        document.getElementById("pop-item4").classList.add("slideR");
    }
    if (isInViewport(service)) {
        document.getElementById("header-services").classList.add("slideUp");
    }
    if ((document.documentElement.scrollTop > 1575 && window.matchMedia("(max-height: 450px)").matches && window.matchMedia("(min-width: 1000px)").matches)) {
        document.getElementById("header-services").classList.add("slideUp");
    }
    if (isInViewport(sitem1)) {
        document.getElementById("sitem1").classList.add("slideR");
    }
    if (isInViewport(sitem2)) {
        document.getElementById("sitem2").classList.add("slideUp");
    }
    if (isInViewport(sitem3)) {
        document.getElementById("sitem3").classList.add("slideL");
    }
    if ((document.documentElement.scrollTop > 1150 && window.matchMedia("(min-height: 550px)").matches && window.matchMedia("(min-width: 1050px)").matches)) {
        document.getElementById("sitem1").classList.add("slideR");
        document.getElementById("sitem2").classList.add("slideUp");
        document.getElementById("sitem3").classList.add("slideL");
    }
    if ((document.documentElement.scrollTop > 1750 && window.matchMedia("(max-height: 550px)").matches && window.matchMedia("(min-width: 1050px)").matches)) {
        document.getElementById("sitem1").classList.add("slideR");
        document.getElementById("sitem2").classList.add("slideUp");
        document.getElementById("sitem3").classList.add("slideL");
    }
    if ((document.documentElement.scrollTop > 2450 && window.matchMedia("(max-height: 550px)").matches && window.matchMedia("(min-width: 400px)").matches)) {
        document.getElementById("sitem1").classList.add("slideR");
    }
    if ((document.documentElement.scrollTop > 3150 && window.matchMedia("(max-height: 550px)").matches && window.matchMedia("(min-width: 400px)").matches)) {
        document.getElementById("sitem2").classList.add("slideUp");
    }
    if ((document.documentElement.scrollTop > 3850 && window.matchMedia("(max-height: 550px)").matches && window.matchMedia("(min-width: 400px)").matches)) {
        document.getElementById("sitem3").classList.add("slideL");
    }
    if (isInViewport(projects)) {
        document.getElementById("header-projects").classList.add("slideUp");
    }

    pro.forEach(pro1 =>{
        if (isInViewport(pro1)) {
            pro1.classList.add("slideR");
        }
        if ((document.documentElement.scrollTop > 1950 && window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(min-width: 1050px)").matches)) {
            pro1.classList.add("slideR");
        }    
        if ((document.documentElement.scrollTop > 2550 && window.matchMedia("(max-height: 500px)").matches && window.matchMedia("(min-width: 1050px)").matches)) {
            pro1.classList.add("slideR");
        }    
        if ((document.documentElement.scrollTop > 4350 && window.matchMedia("(max-height: 500px)").matches && window.matchMedia("(min-width: 450px)").matches)) {
            pro1.classList.add("slideR");
        }  
    })
    if (isInViewport(contact)) {
        document.getElementById("header-contact").classList.add("slideUp");
    }  
    if (isInViewport(form1)) {
        document.getElementById("form1").classList.add("slideD");
    }
    if (isInViewport(form2)) {
        document.getElementById("form2").classList.add("slideR");
    }
    if (isInViewport(form3)) {
        document.getElementById("form3").classList.add("slideL");
    }
    if (isInViewport(form4)) {
        document.getElementById("form4").classList.add("slideUp");
    }
    if (isInViewport(form5)) {
        document.getElementById("form5").classList.add("slideD");
    }
    if (isInViewport(foot1)) {
        document.getElementById("footer-item1").classList.add("slideD");
    }
    if (isInViewport(foot2)) {
        document.getElementById("footer-item2").classList.add("slideD");
    }
    if (isInViewport(foot3)) {
        document.getElementById("footer-item3").classList.add("slideD");
    }
    if (isInViewport(foot4)) {
        document.getElementById("footer-item4").classList.add("slideD");
    }
    if (isInViewport(foot5)) {
        document.getElementById("footer-item5").classList.add("slideD");
    }
    if (isInViewport(media1)) {
        document.getElementById("media-1").classList.add("slideUp");
    }
    if (isInViewport(media2)) {
        document.getElementById("media-2").classList.add("slideUp");
    }
    if (isInViewport(media3)) {
        document.getElementById("media-3").classList.add("slideUp");
    }
    if (isInViewport(res)) {
        document.getElementById("reserved").classList.add("slideD");
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isAtLeastViewport(element){
    if(element.offsetTop<window.innerHeight && element.offsetTop>-element.offsetHeight && element.offsetLeft>-element.offsetWidth && element.offsetLeft<window.innerWidth){
        return true;
    } else {
        return false;
    }
}

// Contact Me Js
const nameform = document.getElementById('name-value')
const emailform = document.getElementById('email-value')
const phoneform = document.getElementById('phone-value')
const msgform = document.getElementById('text-value')
const submit = document.getElementById('form')

submit.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('Clicked');

    // Body
    let ebody = `
    <p><b>Name: </b></p>${nameform.value} 
    <br>
    <p><b>Email: </b></p>${emailform.value}
    <br>
    <p><b>Phone: </b></p>${phoneform.value}
    <br>
    <p><b>Message : </b></p>${msgform.value}
    `;

    // Email code
    Email.send({
        SecureToken : "b90307ef-6954-4566-a96d-b0ccf8a98f47",
        To : 'tuwebsimple444@gmail.com',
        From : "destrada9613@gmail.com",
        Subject : "Email from " + emailform.value,
        Body : ebody
    }).then(
        message => alert('Message')
    );

    submit.reset()
})
Math
