onload = function() {

  const markAsRead = () => {
    const notWrap = document.querySelectorAll(".notifications__message-wrap");
    const readNot = document.querySelector(".notifications__p--read");
    const notStatus = document.querySelectorAll(".notifications__status");
    const notNumber = document.querySelector(".notifications__number");

    //remove the unread dot from messages
    function remStatus() {
        for (let i = 0; i < notWrap.length; i++) {
            if (notStatus[i].classList.contains("notifications__unread")) {
                notStatus[i].classList.remove("notifications__unread");
            }
        }
    }

    //change background color of unread and change new notifications number to zero
     function markRead() {
       for (let i = 0; i < notWrap.length; i++) {
        if (notWrap[i].classList.contains("notifications__new")) {
            notWrap[i].classList.remove("notifications__new");
        }
       }
       notNumber.innerText = '0';
    }
    
    readNot.addEventListener("click", function() {
        markRead();
        remStatus();
    })


  }



  markAsRead();














}
