<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index() {
		$this->load->view('welcome_message');
	}

	public function react() {
		$this->load->view('welcome_react');
	}

	public function data() {
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode(array(
				array(
					"category" => "Sporting Goods",
					"name" => "Baseball",
					"price" => "$49.99",
					"stocked" => true
				),
				array(
					"category" => "Sporting Goods",
					"name" => "Basket ball",
					"price" => "$29.99",
					"stocked" => true
				),
				array(
					"category" => "Electronics",
					"name" => "Iphone 6",
					"price" => "$399.99",
					"stocked" => false
				),
				array(
					"category" => "Electronics",
					"name" => "Xiomi X5",
					"price" => "$99.99",
					"stocked" => false
				)
			)));
	}
}
