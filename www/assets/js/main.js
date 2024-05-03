/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

	// Popup
		var $tint = $('#tint');
		var $form = $tint.children('#popup').children('form');

		// show popup
		var $profile = $('#profile');
		$profile.on('click', function(event) {
			$tint.css('visibility','visible')
		})

		
		// hide popup and clear form
		var $exit = $('#exit');
		var result = $('#result');
		$exit.on('click', function(event) {
			$result[0].innerHTML = '';
			$form[0].reset();
			$tint.css('visibility', 'hidden')
		})

		var $submit = $form.children('ul').children('li').children('input');
		var $result = $('#result');
		$submit.on('click', function(event){
			/*Form Submission*/
			$result[0].innerHTML = '';
			sendForm(event);
		});

		function sendForm(event){
			event.preventDefault();
			
			var formData=JSON.parse(JSON.stringify($form.serializeArray()));
			var payload='{"'
				+formData[0].name+'":"'+formData[0].value+'",'+'"'
				+formData[1].name+'":"'+formData[1].value+'"}';
			
			function HandleInvalid(event){
				alert(event.target.labels[0].innerHTML+':'+event.target.validationMessage);
			};
				
			var name=$('#name');
			name.oninvalid=HandleInvalid;
			var email=$('#email');
			email.oninvalid=HandleInvalid;
			if(name[0].checkValidity()){
				if(email[0].checkValidity()){
					$.ajax({
						type:"POST",
						url : "https://form-submit-tgzthzuz2a-nn.a.run.app",
						dataType:"json",
						crossDomain:"true",
						contentType:"application/json",
						data:payload,
						success:function(){/*clear form and show a success message*/
							$form[0].reset();
							$result[0].innerHTML = 'Success!'
						},
						error:function(error){/*show an error message*/
							if(error.status !=200){
								$result[0].innerHTML = 'Failed, try again'
							}
							else{
								$form[0].reset();
								$result[0].innerHTML = 'Success!';
							}
						}
					});
				}
			};
		};

})(jQuery);