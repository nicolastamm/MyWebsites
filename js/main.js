$(document).ready(function()
{
	scrollHighlight();
	$(window).scroll(scrollHighlight);
});

function scrollHighlight()
{
	var screenMiddle = Math.floor(window.innerHeight/2);
	var top2 = $('#section2').offset().top;             // 'above top 2'=='between top1 & bot1'
	var bottom2 = top2 + $('#section2').outerHeight(); // 'below is bot 2'=='between top3 & bot3' 
	currentY = $(this).scrollTop() + screenMiddle;    // Thus, we dont need top1,3 nor bot1,3
	if(currentY < top2)
	{
		$('#sectionSymbol1Nav img').css('opacity' , '0.8');
		$('#sectionSymbol2Nav img').css('opacity' , '0.3');
		$('#sectionSymbol3Nav img').css('opacity' , '0.3');
	}	
	else if (currentY > bottom2)
	{
		$('#sectionSymbol1Nav img').css('opacity' , '0.3');
		$('#sectionSymbol2Nav img').css('opacity' , '0.3');
		$('#sectionSymbol3Nav img').css('opacity' , '0.8');
	}	
	else
	{
		$('#sectionSymbol1Nav img').css('opacity' , '0.3');
		$('#sectionSymbol2Nav img').css('opacity' , '0.8');
		$('#sectionSymbol3Nav img').css('opacity' , '0.3');
	}
}
function goToByScroll(sectionId , navbarId)
{
	var offsetScroll = $("#"+sectionId).offset().top - 20; // looks better w. 20 on top.
	$('html,body').animate(
	{
        scrollTop: offsetScroll
	}, 'slow' , 'swing');
}
// With these variables we note whether .slideToggle() is .slideUp() or .slideDown() .
var is1collapsed = true;
var is2collapsed = true;
var is3collapsed = true;
function toggleHeight(sectionIdColoring , sectionId)
{
	var thisSectionContent = document.getElementById(sectionId).nextElementSibling;
	$(thisSectionContent).slideToggle(500 , setColor(sectionIdColoring));	
}
function setColor(sectionId)
{

	switch(sectionId)
	{
		case 'section1': //each case highlights or dims the Symbol according to is#collapsed.
			if(is1collapsed)
			{
				$('#sectionSymbol1').css('background' , '#D27606');
				$('#sectionSymbol1 img').css('opacity' , '0.6');
				is1collapsed = false;
			}
			else
			{
				$('#sectionSymbol1').css('background' , '#654217');
				$('#sectionSymbol1 img').css('opacity' , '0.3');
				is1collapsed = true;
			}
			break;
		case 'section2':
			if(is2collapsed)
			{
				$('#sectionSymbol2').css('background' , '#069FD2');
				$('#sectionSymbol2 img').css('opacity' , '0.6');
				is2collapsed = false;
			}
			else
			{
				$('#sectionSymbol2').css('background' , '#175165');
				$('#sectionSymbol2 img').css('opacity' , '0.3');
				is2collapsed = true;
			}
			break;
		case 'section3':
			if(is3collapsed)
			{
				$('#sectionSymbol3').css('background' , '#06AA06');
				$('#sectionSymbol3 img').css('opacity' , '0.6');
				is3collapsed = false;
			}
			else
			{
				$('#sectionSymbol3').css('background' , '#265626');
				$('#sectionSymbol3 img').css('opacity' , '0.3');
				is3collapsed = true;
			}
			break;
	}

}
function sendMail() {
    var link = "mailto:nicolastamm@hotmail.com.ar"
             + "&subject=" + escape("Coffee Break Site")
             + "&body=" + escape(document.getElementById('mailMessage').value)
    ;

    window.location.href = link;
}
