<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
	<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/app.css"/>
	<script src="<?php echo base_url(); ?>assets/js/app.js"></script>
</head>
<body>
<div class="modal fade" id="modal-success">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" name="txt_title">Info</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body">
                  <p name="txt_status"></p>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-primary mr-auto" name="btn_confirm">Save changes</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal" name="btn_cancel">Close</button>
              </div>
          </div>
          <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->

<div id="container">
	<h1>Welcome to CodeIgniter!</h1>

	<div id="body">
		<p>The page you are looking at is being generated dynamically by CodeIgniter.</p>

		<p>The Style you are looking at is processed by laravel-mix.</p>
		<p>Push the button to test the style and the script. <input class="btn btn-outline-primary" type="button" id='btn_test' value="Click Me..."></p>

		<p>If you would like to edit this page you'll find it located at:</p>
		<code>application/views/welcome_message.php</code>

		<p>The corresponding controller for this page is found at:</p>
		<code>application/controllers/Welcome.php</code>

		<p>If you are exploring CodeIgniter for the very first time, you should start by reading the <a href="user_guide/">User Guide</a>.</p>
	</div>

	<p class="footer">Page rendered in <strong>{elapsed_time}</strong> seconds. <?php echo  (ENVIRONMENT === 'development') ?  'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?></p>
</div>
<script>
	$(function(){
		$("#btn_test").click(function(){
			let showMsg = Egen.showMsg;
			// showMsg.setStyle = "danger";
			showMsg.showBtnConfirm = true;
			showMsg.show("CodeIgniter 3 + Laravel-Mix","Integrating CodeIgniter 3 with laravel-mix...");
		});
	});
</script>
</body>
</html>