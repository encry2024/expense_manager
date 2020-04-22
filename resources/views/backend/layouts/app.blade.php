<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="uid" content="{{ Auth::user()->id }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">

    <script>
        window.Laravel = {
            csrfToken: '{{ csrf_token() }}'
        }
    </script>

</head>
<body>
    @include('backend.layouts.header')
    <div class="app-body" id="app">
        @include('backend.layouts.sidebar')
        <div class="container">
            @include('alerts')

            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/highcharts-vue@1.3.5/dist/highcharts-vue.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
