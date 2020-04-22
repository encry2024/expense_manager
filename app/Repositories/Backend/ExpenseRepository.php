<?php


namespace App\Repositories\Backend;

use App\Models\Expense\Expense;
use App\Repositories\BaseRepository;
use DB;
use Auth;

class ExpenseRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Expense::class;
    }

    /**
     * @param array $data
     *
     * @throws \Exception
     * @throws \Throwable
     * @return Expense
     */
    public function create(array $data)
    {
        return DB::transaction(function () use ($data) {
            $expense = parent::create([
                'amount' => $data['amount'],
                'category_id' => $data['category'],
                'user_id' => Auth::user()->id
            ]);

            if ($expense) {
                return $expense;
            }

            throw new GeneralException('There was a problem creating this expense. Please try again.');
        });
    }

    /**
     * @param \App\Models\Expense\Expense $expense
     * @param array $data
     *
     * @return Expense
     *@throws \Exception
     * @throws \Throwable
     * @throws GeneralException
     */
    public function update(Expense $expense, array $data)
    {
        return DB::transaction(function () use ($expense, $data) {
            if ($expense->update([
                'amount' => $data['amount'],
                'category_id' => $data['category']
            ])) {
                return $expense;
            }

            throw new GeneralException("There was a problem updating this expense. Please try again.");
        });
    }
}