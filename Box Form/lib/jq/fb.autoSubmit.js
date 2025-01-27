if (typeof initPull === 'object' && typeof fbForm !== 'undefined') {
    initPull.AutoSubmit = function() {
        var $rootNode = getFbRoot();
        var $submit = getSubmit($rootNode);
        var $inputs = $rootNode.find(':input').not($submit);

        //requires fb.validation
        var submitTo = null;
        parseInt($submit.data('fb-autosubmit')) === 1 &&
            $inputs.change(function() {
                clearTimeout(submitTo);
                submitTo = setTimeout(function() {
                    fbForm.canSubmit($rootNode, false) && $submit.click();
                }, 100);
            });
    }
}