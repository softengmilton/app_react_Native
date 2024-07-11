<?php

namespace Database\Factories;

use App\Models\Song;
use Illuminate\Database\Eloquent\Factories\Factory;

class SongFactory extends Factory
{
    private static $number = 1;

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Song::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3),
            'artist' => $this->faker->name,
            'album' => $this->faker->word,
            'genre' => $this->faker->randomElement(['Pop', 'Rock', 'Hip-Hop', 'Electronic']),
            'file_path' => '/path/to/your/uploaded/files/file_' . self::$number++ . '.mp3', // Ensure unique file path
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
