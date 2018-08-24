let Egen = {
    showMsg: {
        setJudul:"",
        setStatus:"",
        setBtnConfirm:"Confirm",
        showBtnConfirm: false,
        fnBtnConfirm: function(){
            console.log('Btn Confirm Functions');
        },
        show:function(judul,status,btn){
            $("[name='txt_judul']").text("undefined" !== typeof(judul)?judul:this.setJudul);
            $("[name='txt_status']").text("undefined" !== typeof(status)?status:this.setStatus);
            if(this.showBtnConfirm || ("undefined" !== typeof(btn))){
                $("[name='btn_confirm']").text("undefined" !== typeof(btn)?btn:this.setBtnConfirm);
                $("[name='btn_confirm']").show();
            }else{
                $("[name='btn_confirm']").hide();
            }
            $('#modal-success').modal('show');
        },
        hide:function(){
            $("[name='txt_judul']").text('Info');
            $("[name='txt_status']").text("");
            $("[name='btn_confirm']").hide();
            $('#modal-success').modal('hide');
        }
    }
};

window.Egen = Egen;
