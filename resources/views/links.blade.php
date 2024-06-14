<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Additional Links</title>
    <link rel="stylesheet" href="{{ asset('assets/css/links.css') }}">
</head>
<body>
<!-- Nav Bar -->
{{--@include ('nav-header')--}}
<div class="wrapper">
    @foreach($links as $link)
        <div class="grid-item">
            <div class="grid-visual border inline-grid-item">
                <img src="{{$link['img_src']}}" alt="{{$link['img_alt']}}" title="{{$link['img_alt']}}">
            </div>
            <div class="grid-item-text-area border inline-grid-item">
                <div class="text border">
                    <p>
                        {{$link['text']}}
                    </p>
                </div>
                <div class="grid-more-info-button" onclick="location.href = '{{$link['url']}}';"></div>
            </div>
        </div>
    @endforeach
</div>
</body>
</html>
