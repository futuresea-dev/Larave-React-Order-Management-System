<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestLog extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'endpoint',
        'response',
        'method',
        'status',
    ];
}
