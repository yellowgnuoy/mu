    $(document).ready(function() {
        var slideInElements = $('.slideup');

        function checkSlide() {
            slideInElements.each(function() {
                var slideInAt = (window.scrollY + window.innerHeight) - ($(this).height() / 2);
                var elementBottom = $(this).offset().top + $(this).height();
                var isHalfShown = slideInAt > $(this).offset().top;
                var isNotScrolledPast = window.scrollY < elementBottom;

                if (isHalfShown && isNotScrolledPast) {
                    $(this).addClass('on');
                } else {
                    $(this).removeClass('on');
                }
            });
        }

        $(window).scroll(checkSlide);
        $(window).resize(checkSlide);

        // 최초 로드 시에도 체크
        checkSlide();
    });