<?php


namespace App\Repositories\Backend;


use App\Exceptions\GeneralException;
use App\Models\User\User;
use App\Repositories\BaseRepository;
use Illuminate\Pagination\LengthAwarePaginator;

class UserRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    /**
     * @param int    $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return mixed
     */
    public function getActivePaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc')
    {
        return $this->model
            ->with('roles', 'permissions')
            ->orderBy($orderBy, $sort)
            ->paginate($paged);
    }

    /**
     * @param array $data
     *
     * @throws \Exception
     * @throws \Throwable
     * @return User
     */
    public function create(array $data)
    {
        return DB::transaction(function () use ($data) {
            $user = parent::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
                'password' => $data['password'],
            ]);

            // See if adding any additional permissions
            if (! isset($data['permissions']) || ! count($data['permissions'])) {
                $data['permissions'] = [];
            }

            if ($user) {
                // User must have at least one role
                if (! count($data['roles'])) {
                    throw new GeneralException('User must have at least one role');
                }

                // Add selected roles/permissions
                $user->syncRoles($data['roles']);
                $user->syncPermissions($data['permissions']);

                return $user;
            }

            throw new GeneralException('There was a problem creating this user. Please try again.');
        });
    }
}