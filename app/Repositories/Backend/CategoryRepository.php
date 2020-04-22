<?php


namespace App\Repositories\Backend;

use App\Models\Category\Category;
use App\Repositories\BaseRepository;
use DB;

class CategoryRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Category::class;
    }

    /**
     * @param array $data
     *
     * @throws \Exception
     * @throws \Throwable
     * @return Category
     */
    public function create(array $data)
    {
        return DB::transaction(function () use ($data) {
            $category = parent::create([
                'name' => $data['name']
            ]);

            if ($category) {
                return $category;
            }

            throw new GeneralException('There was a problem creating this category. Please try again.');
        });
    }

    /**
     * @param \App\Models\Category\Category $category
     * @param array $data
     *
     * @return Category
     *@throws \Exception
     * @throws \Throwable
     * @throws GeneralException
     */
    public function update(Category $category, array $data)
    {
        return DB::transaction(function () use ($category, $data) {
            if ($category->update([
                'name' => $data['name']
            ])) {
                return $category;
            }

            throw new GeneralException("There was a problem updating this category. Please try again.");
        });
    }
}