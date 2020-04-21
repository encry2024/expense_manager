<?php

namespace App\Providers;

use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;
use Illuminate\Support\ServiceProvider;

class HelperServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $rdi = new RecursiveDirectoryIterator(app_path('Helpers'.DIRECTORY_SEPARATOR.'Global'));
        $it = new RecursiveIteratorIterator($rdi);

        while ($it->valid()) {
            if (
                ! $it->isDot() &&
                $it->isFile() &&
                $it->isReadable() &&
                $it->current()->getExtension() === 'php' &&
                strpos($it->current()->getFilename(), 'Helper')
            ) {
                require $it->key();
            }

            $it->next();
        }
    }
}
