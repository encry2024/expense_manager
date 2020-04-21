<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

/**
 * Class PermissionRoleTableSeeder.
 */
class PermissionRoleTableSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seed.
     */
    public function run()
    {
        $this->disableForeignKeys();

        // Create Roles
        $admin = Role::create(['name' => 'administrator']);
        $user = Role::create(['name' => 'user']);

        // Create Permissions
        $permissions = [
            'view backend',

            'view expense',
            'store expense',
            'edit expense',
            'delete expense',
            'restore expense',
            'delete permanently expense',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // ALWAYS GIVE ADMIN ROLE ALL PERMISSIONS
        $admin->givePermissionTo(Permission::all());

        // Assign Permissions to other Roles
        $user->givePermissionTo('view backend');
        $user->givePermissionTo('view expense');
        $user->givePermissionTo('store expense');
        $user->givePermissionTo('edit expense');
        $user->givePermissionTo('delete expense');

        $this->enableForeignKeys();
    }
}
