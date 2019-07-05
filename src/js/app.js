window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
} catch (e) {
    console.log(e);
}

/**
 * Egen Functions for displaying Message Box
 * 
 * Author Eko Junaidi Salam <eko_junaidisalam@live.com>
 * 
 * showMsg Objects
 * @param setTitle String   Set your default title
 * @param setStatus String  Set your default messages
 * @param setBtnConfirm String  Set default button confirm name
 * @param showBtnConfirm Boolean    Set true, to dispaly confirm button.
 * @param fnBtnConfirm function     Set confirm function if you enabled btn confirm
 * @param show function     Display the message
 *      @param title    String  Message box title
 *      @param status   String  Message box status
 *      @param btn      String  Message box button name
 * @param hide function     Hide the message
 */
let Egen = {
    showMsg: {
        setTitle:"",
        setStatus:"",
        setStyle:"primary",
        setBtnConfirm:"Confirm",
        showBtnConfirm: false,
        fnBtnConfirm: function(){
            console.log('Btn Confirm Functions');
        },
        show:function(title,status,btn){
            $("[name='txt_title']").text("undefined" !== typeof(title)?title:this.setTitle);
            $("[name='txt_status']").text("undefined" !== typeof(status)?status:this.setStatus);
            if(this.showBtnConfirm || ("undefined" !== typeof(btn))){
                $("[name='btn_confirm']").text("undefined" !== typeof(btn)?btn:this.setBtnConfirm);
                $("[name='btn_confirm']").show();
            }else{
                $("[name='btn_confirm']").hide();
            }
            
            if(!$('#modal-success').hasClass(this.setStyle)){
                $('#modal-success').removeClass();
                $("[name='btn_confirm']").removeClass();
                $("[name='btn_cancel']").removeClass();
                $("[name='btn_confirm']").addClass('btn btn-' + this.setStyle + ' mr-auto');
                $("[name='btn_cancel']").addClass('btn btn-' + this.setStyle);
                $('#modal-success').addClass('modal modal-' + this.setStyle + ' fade');
            }
            $('#modal-success').modal('show');
            
        },
        hide:function(){
            $("[name='txt_title']").text("");
            $("[name='txt_status']").text("");
            $("[name='btn_confirm']").hide();
            $('#modal-success').modal('hide');
        }
    }
};

window.Egen = Egen;
