var submitbieoneclick = function(id) {
        // /home/moris/Work/FeedBackForm/catalog/view/javascript/feedback.js
        var name = $('#product_name_'+id);
        var price = $('#product_price_'+id);
        var phone = $('#product_phone_'+id);
        // alert($('#product_name_'+id).val());
    // alert(name.val()+price.val()+phone.val());

    if (validate(name, price, phone) === false) {
            alert('validate fail');
            return false;
        }
        $.post('/index.php?route=module/bieoneclick/send',
            {
                'name': $(name).val(),
                'price': $(price).val(),
                'phone': $(phone).val(),
            })
            .success(function (data) {
                // alert(data);
                // $(product_name).val('');
                // $(product_price).val('');
                // $(phone).attr('');
                $('#feedback_success_'+id).show(0).delay(500).hide(0);
            })
            .error(function () {
                $('#feedback_error_'+id).show(0).delay(500).hide(0);
            })
          .fail(function () {
                $('#feedback_error_'+id).show(0).delay(500).hide(0);
            })
    }

    var validate = function (name, price, phone) {
// alert(name.val()+price.val()+phone.val());
        var nameVal = $(name).val();
        if (nameVal.length < 3 || nameVal.length > 32) {
            $(name).parent().addClass('has-error');
            $('#feedback_error').show(0).delay(5000).hide(0);
            return false;
        } else {
            $(name).parent().removeClass('has-error');
        }

        var priceVal = $(price).val();
        if (priceVal.length < 3 || priceVal.length > 32) {
            $(price).parent().addClass('has-error');
            $('#feedback_error').show(0).delay(5000).hide(0);
            return false;
        } else {
            $(price).parent().removeClass('has-error');
        }
        var phoneVal = $(phone).val();
        if (phoneVal.length > 15 || phoneVal.length < 6) {
            $(phone).parent().addClass('has-error');
            $('#feedback_error').show(0).delay(5000).hide(0);
            return false;
        } else {
            $(phone).parent().removeClass('has-error');
        }
    }
