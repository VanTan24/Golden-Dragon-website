<script>
$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});
</script>
<script>//<![CDATA[
var _widget_settings = {
  positions: 'bottom left',

  support: {
    staff: {
        visible: 'false',
      name: 'Quỳnh Trân',
      
      messages: 'Chúng tôi có thể hỗ trợ gì cho anh/chị không ạ?'
    }
  },
  buttons: {
    contact: {
      visible: 'false',
      // id: 'https://www.cuahangtemplate.com/p/lien-he-thiet-ke-website-email-ho-tro.html',
      messages: 'Liên hệ'
    },
    email: {
      visible: 'false',
      id: 'lhuy15007@gmail.com',
      messages: 'Gửi email'
    },
    call: {
      visible: 'true',
      id: '02345678976',
      messages: 'Hotline'
    },
    sms: {
      visible: 'false',
      id: '02345678976',
      messages: 'Nhắn tin'
    },
    viber: {
      visible: 'false',
      // id: '',
      messages: 'Chat Viber'
    },
    telegram: {
      visible: 'false',
      
      messages: 'Chat Telegram'
    },
    zalo: {
      visible: 'true',

      
      messages: 'Chat Zalo'
    },
    facebook: {
      visible: 'true',
      
      messages: 'Messages'
    }
  }
}
//]]>
    
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'>
    
</script>
<script src='https://cdn.jsdelivr.net/gh/thietkeblogspot/js/contact-buttons-widget.min.js'>
    
</script>
<script>
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});
</script>