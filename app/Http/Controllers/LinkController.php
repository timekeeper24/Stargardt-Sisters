<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LinkController extends Controller
{
    public function index()
    {
        $links = [
            [
                'img_src' => 'https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg',
                'img_alt' => 'pupper dawg',
                'text' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, distinctio placeat? Ipsum et quos dolores qui quasi atque repudiandae ad est! Nulla aut inventore quaerat quas suscipit id neque tempore!',
                'url' => 'www.google.com'
            ],
            [
                'img_src' => 'https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg',
                'img_alt' => 'pupper dawg',
                'text' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, distinctio placeat? Ipsum et quos dolores qui quasi atque repudiandae ad est! Nulla aut inventore quaerat quas suscipit id neque tempore!',
                'url' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, distinctio placeat? Ipsum et quos dolores qui quasi atque repudiandae ad est! Nulla aut inventore quaerat quas suscipit id neque tempore!'
            ],
        ];
        return view('links', ['links' => $links]);
    }
}
