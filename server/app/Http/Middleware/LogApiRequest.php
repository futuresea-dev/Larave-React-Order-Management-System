<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\RequestLog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class LogApiRequest
{
    public function handle(Request $request, Closure $next)
    {
        // Call the next middleware (get the response)
        $response = $next($request);
        // Ensure the user is authenticated
        if (Auth::check()) {
            $user = Auth::user();
            $endpoint = $request->path();
            $status = $response->status();
            $responseData = method_exists($response, 'getContent') ? $response->getContent() : null;
            $method = $request->method();

            // Log the request
            RequestLog::create([
                'user_id' => $user->id,
                'endpoint' => $endpoint,
                'status' => $status,
                'response' => $responseData, // Optionally truncate if the data is large,
                'method' => $method, // Include the HTTP method for better tracking
            ]);
        }

        return $response;
    }
}

