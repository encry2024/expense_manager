<?php

use Illuminate\Support\Facades\DB;

/**
 * Class TruncateTable.
 */
trait TruncateTable
{
    /**
     * @param array $tables
     */
    protected function truncateMultiple(array $tables)
    {
        foreach ($tables as $table) {
            DB::table($table)->truncate();
        }
    }
}
