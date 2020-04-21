<?php

use Illuminate\Database\Seeder;
use App\Models\User\User;

class UserRoleTableSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->disableForeignKeys();

        User::find(1)->assignRole('administrator');
        User::find(2)->assignRole('user');

        $this->enableForeignKeys();
    }
}
