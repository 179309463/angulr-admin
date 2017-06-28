+function ($) {

  $(function(){
      //默认激活选项
      var hash = window.location.href;
      if(typeof(hash.match(/http:\/\/(.*?)\/(.*)/)[2]) != 'undefined'){
          //匹配后缀有数字的链接(如：编辑/删除 /admin/news/edit/1)，返回/admin/news
          var operation = hash.match(/http:\/\/(.*?)\/(.*)\/(.*)\/(\d+)$/);
          if(typeof(operation) != 'undefined' && operation){
              $url = operation[2];
          }else{
              $url = hash.match(/http:\/\/(.*?)\/(.*)/)[2];
          }
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