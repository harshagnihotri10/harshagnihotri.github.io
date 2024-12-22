const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const skills = document.querySelector('#skills');
const skillsContent = document.querySelector('#skills-content');
const resume = document.querySelector('#resume');
const resumeContent = document.querySelector('#resume-content');
const education = document.querySelector('#education');
const educationContent = document.querySelector('#education-content');
const experience = document.querySelector('#experience');
const experienceContent = document.querySelector('#experience-content');
const projects = document.querySelector('#projects');
const projectsContent = document.querySelector('#projects-content');

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    background: '#00aa00', 
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00'); 
    },
    onblur: function () {
      this.setBackground('#777');
    },
    onclose: function () {
      contactContent.style.display = 'none';
    },
  });

  contactContent.style.display = 'block';
});



skills.addEventListener('click', () => {
  const skillsBox = new WinBox({
    title: 'Skills',
    background: '#00aa00', 
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: skillsContent,
    onfocus: function () {
      this.setBackground('#00aa00'); // Highlighted background when focused
    },
    onblur: function () {
      this.setBackground('#777'); // Dimmed background when unfocused
    },
    onclose: function () {
      // Reset the skillsContent display style when the box is closed
      skillsContent.style.display = 'none';
    },
  });

  // Ensure the skills content is visible
  skillsContent.style.display = 'block';
});



resume.addEventListener('click', () => {
  const resumeBox = new WinBox({
    title: 'Resume',
    background: '#00aa00', // Custom background color
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: resumeContent,
    onfocus: function () {
      this.setBackground('#00aa00'); // Highlighted background when focused
    },
    onblur: function () {
      this.setBackground('#777'); // Dimmed background when unfocused
    },
    onclose: function () {
      // Reset the skillsContent display style when the box is closed
      resumeContent.style.display = 'none';
    },
  });

  // Ensure the skills content is visible
  resumeContent.style.display = 'block';
});



education.addEventListener('click', () => {
  const educationBox = new WinBox({
    title: 'My Education',
    background: '#00aa00', // Eye-catching blue background
    width: '60%',
    height: '60%',
    top: 50,
    right: 100,
    bottom: 50,
    left: 50,
    mount: educationContent, // Mount the education content inside the WinBox
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
    onclose: function () {
      // Reset the skillsContent display style when the box is closed
     educationContent.style.display = 'none';
    },
  });
   // Ensure the skills content is visible
   educationContent.style.display = 'block';
  });



experience.addEventListener('click', () => {
  const experienceBox = new WinBox({
    title: 'Professional Experience',
    background: '#00aa00',
    width: '60%',
    height: '60%',
    top: 50,
    right: 100,
    bottom: 50,
    left: 50,
    mount: experienceContent, 
    onfocus: function () {
      this.setBackground('#00aa00'); // Highlight when focused
    },
    onblur: function () {
      this.setBackground('#777'); // Dimmed background when unfocused
    },
    onclose: function () {
      // Reset the skillsContent display style when the box is closed
     experienceContent.style.display = 'none';
    },
  });
   experienceContent.style.display = 'block';
  });



projects.addEventListener('click', () => {
  const projectsBox = new WinBox({
    title: 'Projects',
    background: '#00aa00',
    width: '60%',
    height: '60%',
    top: 50,
    right: 100,
    bottom: 50,
    left: 50,
    mount: projectsContent, 
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
    onclose: function () {
     projectsContent.style.display = 'none';
    },
  });
   projectsContent.style.display = 'block';
  });


const collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener('click', function () {
      const projectDetails = this.nextElementSibling;
      
      if (projectDetails.style.display === "block") {
        projectDetails.style.display = "none";
      } else {
        projectDetails.style.display = "block";
      }
    });
  });


$.fn.typewriter = function() {
  this.each(function() {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function() {
      if ("<" == b.substring(a, a + 1)) {
        var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
        else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
        else
          for (;
            ">" != b.substring(a, a + 1);) a++
      }
      c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
      a >= b.length || setTimeout(e, 20 + 25 *
        Math.random())
    };
    e()
  });
  return this
};
$(".terminal").typewriter();

