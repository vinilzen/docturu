$(function(){

	function a(){
		$('.fixh').css('max-height',400);
		$('.all_inf').html('Свернуть')
		return false;
	}
	function b(){
		$('.fixh').css('max-height',187);
		$('.all_inf').html('Вся информация')
		return false;
	};

	$('.all_inf').click(function(){
		return (this.toggle = !this.toggle) ? a() : b();
	});
});