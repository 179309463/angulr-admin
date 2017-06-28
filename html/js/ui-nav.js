+function ($) {

  $(function(){
      //菜单选中状态防刷新
      var hash = window.location.pathname;
      if(hash.length > 1){
          //匹配搜索链接
          if(hash.lastIndexOf('?') > 0){
              hash = hash.substr(0,window.location.href.lastIndexOf('?'));
          }
          //替换/admin/notice/add/5为/admin/notice
          $url = hash.replace(/\/([^/]+)\/(\d+)$/,'');
          var $this = $("[ui-nav] a[href$='"+$url+"']");
          $this.is('a') || ($this = $this.closest('a'));
          $this.parents('ul').parent().toggleClass('active');
          $this.parent().addClass('active');
          $this.next().is('ul') && e.preventDefault();
      }
      // nav
      $(document).on('click', '[ui-nav] a', function (e) {
        var $this = $(e.target), $active;
        $this.is('a') || ($this = $this.closest('a'));
        
        $active = $this.parent().siblings( ".active" );
        $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);
        
        ($this.parent().hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
        $this.parent().toggleClass('active');
        
        $this.next().is('ul') && e.preventDefault();
      });

  });
}(jQuery);