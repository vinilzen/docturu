$(function(){

	function a(){
		$('.fixh').css('max-height',400);
		$('.all_inf').html('Свернуть')
		return false;
	}
	function b(){
		$('.fixh').css('max-height',187);
		$('.all_inf').html('Показать полностью')
		return false;
	};

	$('.all_inf').click(function(){
		return (this.toggle = !this.toggle) ? a() : b();
	});

	//$('.tab-content select').styler({selectSearch:true});
	//
	$("#mainSearch select").chosen({
        no_results_text: 'Нет совпадений',
        allow_single_deselect: true,
        search_contains: true,
        width: '100%'
    });
});