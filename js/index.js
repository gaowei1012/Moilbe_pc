$(function() {

	$('.ShowIcon').on('click', function() {
		$('.ewm_icon').toggle('slow');
	})

	
	// 鼠标点击改变Li标签状态
	$('.item_list').on('click', function() {
		$('.item_list').removeClass('active_list')
		$(this).addClass('active_list')
	})
	// 鼠标移动更改li标签状态
	$('.item_list').on('mousemove', function() {
		$('.item_list').removeClass('active_list')
		$(this).addClass('active_list')
	})
	
	// 改变图片透明度
	$('.mouer_icon').on('mouseover', function() {
		$(this).css({'opacity': 1})
		$(this).css({'opacity': 0.6})
		$(this).on('mouseout', function() {
			$(this).css({'opacity': 1})
		})
	})

	
});