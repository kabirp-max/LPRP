if (typeof initPull === 'object') {
    initPull.OtherInput = function() {
        function isOther($current) {
            return $current.attr('data-fb-other') === '1';
        }

        function addOtherInput($target) {
            if (!$target.is(':input[data-fb-element=input]')) {
                return;
            }

            var $parent = $target.parent();
            if ($parent.find('.select-other').length) {
                return;
            }

            var $newOther = $('<input type="text">')
                .addClass('select-other form-control form-control-sm')
                .attr('name', $target.attr('name') + '-other')
                .css('display', 'none')
                .prop('required', $target.is(':required'))
                .keyup(function(e) {
                    if (parseInt(e.which) === 13 || parseInt(e.keyCode) === 13 || e.key === 'Enter') {
                        $target.change();
                    }
                });

            $target.is('select') ?
                $target.after($newOther) :
                $parent.append($newOther);

            $newOther.slideDown();
        }

        function removeOtherInput($target) {
            if (!$target.is(':input[data-fb-element=input]')) {
                return;
            }
            $target.parent().find('.select-other').slideUp(function() {
                $(this).remove();
            });
        }

        function updateCheckboxes($current) {
            var $currentGroup = $(':input[name="' + $current.attr('name') + '"]');
            $currentGroup.each(function(i, input) {
                var $input = $(input);
                isOther($input) && $input.is(':checked') ?
                    addOtherInput($input) :
                    removeOtherInput($input);
            });
        }

        function updateSelect($select) {
            var $selected = $select.find(':selected').first();
            isOther($selected) ? addOtherInput($select) : removeOtherInput($select);
        }

        getFbRoot().find(':input[data-fb-element=input]').change(function(e) {
            var $current = $(e.currentTarget);
            if ($current.is('select')) {
                updateSelect($current);
            } else {
                updateCheckboxes($current);
            }
        });
    }
}