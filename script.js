{/* <button id="scrollUpBtn" title="Go to top">&#8679;</button> */}

 

        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
      
        function opentab(tabname){
          for(tablink of tablinks){
            tablink.classList.remove("active-link");
          }
          for(tabcontent of tabcontents){
              tabcontent.classList.remove("active-tab");
          }
          event.currentTarget.classList.add("active-link");
          document.getElementById(tabname).classList.add("active-tab");
        }

 
 
 

    var sidemeu = document .getElementById("sidemenu");

    function openmenu(){
      sidemeu.style.right = "0";
    }
    function closemenu(){
      sidemeu.style.right = "-200px";
    }

 
//   contact form

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwNkKZ0slUFMZwb4Qr6bJxbMLpfjCRkKG1PXu4QbNTQ0Y2zoS6QFn3RgaR9yqxUJ0yu1g/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
            msg.innerHTML = ""
          },5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
 
//   scroll up
 
    document.addEventListener('DOMContentLoaded', function () {
    // Get the scroll-up button element
    var scrollUpBtn = document.getElementById('scrollUpBtn');

    // Show or hide the scroll-up button based on the scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpBtn.style.display = 'block';
        } else {
            scrollUpBtn.style.display = 'none';
        }
    };

    // Scroll to the top when the button is clicked
    scrollUpBtn.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
 
// See More
document.getElementById('seeMoreBtn').addEventListener('click', function() {
    const moreContent = document.getElementById('moreContent');
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        this.textContent = 'See Less';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'See More';
    }
});