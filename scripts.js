onload = function() {

  const markAsRead = () => {
    const readNot = document.querySelector(".notifications__p--read");
    const newNot = document.querySelectorAll(".notifications__new");
    const notStatus = document.querySelectorAll(".notifications__status");
    const notNumber = document.querySelector(".notifications__number");

    //remove the unread dot from messages
    function remStatus() {
        for (let i = 0; i < notStatus.length; i++) {
            notStatus[i].classList.remove("notifications__unread");
        }
    }

    //change background color of unread and change new notifications number to zero
    function markRead() {
        for (let i = 0; i < newNot.length; i++) {
            newNot[i].style.background = "#fff";
            notNumber.innerText = '0';
        }
    }
    
    readNot.addEventListener("click", function() {
        markRead();
        remStatus();
    })


  }



  markAsRead();














}