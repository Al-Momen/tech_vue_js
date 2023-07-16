<?php 

namespace App\CustomFacade;
use Illuminate\Support\Facades\Facade;

class FacadeTest extends Facade{

    protected static function getFacadeAccessor(){
        return 'Test';
    }

}