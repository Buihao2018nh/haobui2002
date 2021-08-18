const addBtns = document.querySelectorAll('.js-by-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalcontainer = document.querySelector('.js-modal-container')
// hàm hiển thi modal để mua vé
        function showBytickets(){
            modal.classList.add('open')
          
        }
//  hàm ẩn tắt đi modal mua vé
        function hideBytickets(){
            modal.classList.remove('open')
        }

//  lập qua từng thẻ butom để nghe hành vi click
     for(const addbtn of addBtns){
         addbtn.addEventListener('click', showBytickets)
     }
// nghe hành vi click vao close
     modalClose.addEventListener('click',  hideBytickets)
// khi click ra bên ngoài thi modal sẽ bị đóng đi
     modal.addEventListener('click', hideBytickets)
// khắc phục lỗi bên trên khi mình đóng lại
     modalcontainer.addEventListener('click', function(event){
         event.stopPropagation()
     })
    //  -------------/ hàm hiển thi modal để mua vé--------------//

    var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu-btn');
        var headerHeight = header.clientHeight;

        // Đóng/ Mở mobile menu
        mobileMenu.onclick = function() {
            var isClosed =header.clientHeight === headerHeight;
            if (isClosed) {
                header.style.height ='auto';   
            } else {
                header.style.height =null;
            }
        }

                    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
            for (var i = 0; i < menuItems.length; i++) {

            var menuItem = menuItems[i];

            menuItem.onclick = function (event) {
                 var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
                  if (isParentMenu) {
                   
                        event.preventDefault();
                      } else {
                        
                         header.style.height = null;
                   }
                }
            }