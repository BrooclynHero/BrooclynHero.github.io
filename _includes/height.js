<script type="text/javascript"> 
	function setHeiHeight() {
    $('#page').css({
        height: $(window).height() + 'px'
    });
}
setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна
</script>