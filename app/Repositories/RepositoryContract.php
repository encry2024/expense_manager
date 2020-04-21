<?php

namespace App\Repositories;

/**
 * Interface RepositoryContract.
 */
interface RepositoryContract
{
    public function all(array $columns = ['*']);

    public function count();

    public function create(array $data);

    public function delete();

    public function first(array $columns = ['*']);

    public function get(array $columns = ['*']);

    public function paginate($limit = 25, array $columns = ['*'], $pageName = 'page', $page = null);

    public function limit($limit);

    public function orderBy($column, $value);

    public function where($column, $value, $operator = '=');

    public function with($relations);
}
