<?php

namespace App\Http\Controllers;

use App\Models\RequestLog;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ApiRequestController extends Controller
{
    public function getRequestCounts()
    {
        $user = auth()->user();

        // Get the date for 1 day ago and 1 week ago
        $oneDayAgo = Carbon::now()->subDay();
        $oneWeekAgo = Carbon::now()->subWeek();

        // Count the requests for the last day and week
        $countLastDay = RequestLog::where('user_id', $user->id)
            ->where('created_at', '>=', $oneDayAgo)
            ->count();

        $countLastWeek = RequestLog::where('user_id', $user->id)
            ->where('created_at', '>=', $oneWeekAgo)
            ->count();

        // Optionally, you can count the requests by endpoint
        $countByEndpointLastDay = RequestLog::where('user_id', $user->id)
            ->where('created_at', '>=', $oneDayAgo)
            ->select('endpoint', \DB::raw('count(*) as count'))
            ->groupBy('endpoint')
            ->get();

        return response()->json([
            'request_count_last_day' => $countLastDay,
            'request_count_last_week' => $countLastWeek,
            'requests_by_endpoint_last_day' => $countByEndpointLastDay
        ]);
    }
}
