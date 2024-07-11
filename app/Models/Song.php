<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $fillable = ['title', 'artist', 'file_path'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
