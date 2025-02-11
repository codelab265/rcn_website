<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    // An array to hold dynamic data
    protected $data = [];



    // Magic method to set a property
    public function __set($name, $value)
    {
        $this->data[$name] = $value;
    }

    // Magic method to get a property
    public function __get($name)
    {
        return $this->data[$name] ?? null; // return null if the key doesn't exist
    }

    // Magic method to check if a property is set
    public function __isset($name)
    {
        return isset($this->data[$name]);
    }
}
