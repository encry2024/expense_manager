<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use DisableForeignKeys,
        TruncateTable;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->disableForeignKeys();

        // Reset cached roles and permissions
        app()['cache']->forget('spatie.permission.cache');

        $this->call(UsersTableSeeder::class);
        $this->call(PermissionRoleTableSeeder::class);
        $this->call(UserRoleTableSeeder::class);

        $this->enableForeignKeys();
    }
}
