<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{

    public function __invoke()
    {

        $persons = [
            [
                'id' => 1,
                'name' => 'Vasya',
                'age' => 20,
                'job' => 'coach'
            ],
            [
                'id' => 2,
                'name' => 'Ivan',
                'age' => 30,
                'job' => 'developer'
            ],
            [
                'id' => 3,
                'name' => 'Olya',
                'age' => 40,
                'job' => 'disigner'
            ],
        ];


        return $persons;
    }
}
